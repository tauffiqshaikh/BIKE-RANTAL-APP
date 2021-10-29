import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput, Card, Text, Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const DUMMY_ANSWERS = {
  hi: "Hello there!",
  1: "This is  a Bike renting app",
  2: "Go to home Screen and click on the type of bike you want to rent and you will be navigated further",
  3: "It was developed using react-native expo-cli.",
  4: "Contact tauffiqshaikh2560@gmail.com",
};

const DUMMY_QUESTIONS = {
  1: "What is this application?",
  2: "How to rent a bike?",
  3: "How was it devloped?",
  4: "More queries?",
};

function Chatscreen() {
  const [input, setInput] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const handleChatQuestion = () => {
    if (!input.trim()) {
      return;
    }

    setQuestions((prevQ) => {
      const temp = [...prevQ];
      temp.push(input);
      return temp;
    });

    switch (input.toLowerCase().trim()) {
      case "hi":
      case "hello":
      case "hey":
        setAnswers((prevA) => {
          const temp = [...prevA];
          temp.push(DUMMY_ANSWERS["hi"]);
          return temp;
        });
        break;

      default:
        setAnswers((prevA) => {
          const temp = [...prevA];
          temp.push("Could not understand your question. Please try again.");
          return temp;
        });
    }

    setInput("");
  };

  const handlePress = (id) => {
    setQuestions((prevQ) => {
      const temp = [...prevQ];
      temp.push(DUMMY_QUESTIONS[id]);
      return temp;
    });

    setAnswers((prevA) => {
      const temp = [...prevA];
      temp.push(DUMMY_ANSWERS[id]);
      return temp;
    });
  };

  return (
    <>
      <View style={{ flex: 1,marginTop:30 }}>
        <ScrollView horizontal>
          <View
            style={{
              paddingBottom: 5,
              backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <Button
              onPress={() => handlePress(1)}
              style={{
                margin: 10,
                padding: 5,
                borderRadius: 10,
                backgroundColor: "rgb(62, 150, 201)",
              }}
            >
              <Text>What is this appplication?</Text>
            </Button>

            <Button
              onPress={() => handlePress(3)}
              style={{
                margin: 10,
                padding: 5,
                borderRadius: 10,
                backgroundColor:"rgb(62, 150, 201)",
              }}
            >
              <Text>How was it developed?</Text>
            </Button>

            <Button
              onPress={() => handlePress(2)}
              style={{
                margin: 10,
                padding: 5,
                borderRadius: 10,
                backgroundColor:"rgb(62, 150, 201)",
              }}
            >
              <Text>How to rent a bike?</Text>
            </Button>

            <Button
              onPress={() => handlePress(4)}
              style={{
                margin: 10,
                padding: 5,
                borderRadius: 10,
                backgroundColor: "rgb(62, 150, 201)",
              }}
            >
              <Text>More queries?</Text>
            </Button>

    
            
          </View>
        </ScrollView>
        <StatusBar 
                backgroundColor="white"
                style="dark"
                />
      </View>

      <View style={{ flex: 8 }}>
        <ScrollView >
          <View style={{ marginBottom: 20 }}>
            {questions.map((temp, index) => (
              <View key={index}>
                <Card
                  style={{
                    width: "50%",
                    alignSelf: "flex-end",
                    padding: 10,
                    marginVertical: 20,
                    borderRadius: 10,
                    backgroundColor: "black",
                  }}
                >
                  <Text style={{ color: "#fff" }}>{questions[index]}</Text>
                </Card>

                <Card
                  style={{
                    width: "50%",
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Text>{answers[index]}</Text>
                </Card>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <TextInput
          style={{ position: "absolute", bottom: 10, right: 0, left: 0 }}
          mode="outlined"
          label="Ask me..."
          value={input}
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={handleChatQuestion}
        />
      </View>
    </>
  );
}

export default Chatscreen;
