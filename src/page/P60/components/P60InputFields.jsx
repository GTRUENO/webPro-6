import React, { useState } from "react";
import axios from "axios"; // OpenAI API 호출을 위한 라이브러리
import "./asd.css";

const P63InputFields = ({ inputs, handleInputChange }) => {
  const [results, setResults] = useState(Array(inputs.length).fill(null));
  const [disabledButtons, setDisabledButtons] = useState(
    Array(inputs.length).fill(false)
  );
  const oSound = new Audio("/sounds/o-sound.mp3");
  const xSound = new Audio("/sounds/x-sound.mp3");
  const handleSubmit = async (index) => {
    const userInput = inputs[index];
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 대기
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant that evaluates whether a response is appropriate for what someone would do after winning the lottery.",
            },
            {
              role: "user",
              content: `아래 문장이 복권에 당첨되었을 때 해야 할 일에 대한 적절한 대답인지 판단하세요:\n"${userInput}"\n적절하면 O, 부적절하면 X를 반환하세요.`,
            },
          ],
          max_tokens: 10,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      const result = response.data.choices[0].message.content.trim();
      setResults((prevResults) => {
        const newResults = [...prevResults];
        newResults[index] = result === "O" ? "O" : "X";
        if (result === "O") {
          oSound.play();
        } else if (result === "X") {
          xSound.play();
        }
        return newResults;
      });

      setDisabledButtons((prevDisabled) => {
        const newDisabled = [...prevDisabled];
        newDisabled[index] = true;
        return newDisabled;
      });
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
    }
  };

  return (
    <div className="inputs">
      <div className="example-container">
        <span style={{ color: "red", fontWeight: "bold" }}>예시)</span>
        <h4 style={{ color: "black", fontSize: "1.1em", lineHeight: "1.6" }}>
          요즘 뉴스 보니깐 소방관들 장갑이 많이 낡고, 근무환경도 많이 열악하
          <br />
          다고 해요. 불철주야 고생하는 소방관들을 위해 기부하는 건 어때요?
        </h4>
      </div>

      {inputs.map((input, index) => (
        <div key={index} className="input-group">
          <label className="input-label">{index + 1}.</label>
          <input
            type="text"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            disabled={disabledButtons[index]}
          />
          <button
            className="submit-button"
            onClick={() => handleSubmit(index)}
            disabled={disabledButtons[index]}
          >
            제출
          </button>
          {results[index] && (
            <span className={`result ${results[index] === "O" ? "valid" : "invalid"}`}>
              {results[index]}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default P63InputFields;
