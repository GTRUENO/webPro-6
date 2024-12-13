import React, { useState } from 'react'
import P58StairTitle from './P58StairTitle'
import P58Stair from './P58Stair'

const P58AllStair = () => {
  const [programs, setPrograms] = useState({
    "5층": "",
    "4층": "",
    "3층": "",
    "2층": "",
    "1층 진료": "",
    "1층 물리치료": ""
  })

  const [feedback, setFeedback] = useState({
    "5층": "",
    "4층": "",
    "3층": "",
    "2층": "",
    "1층 진료": "",
    "1층 물리치료": ""
  })

  const handleInputChange = (floor, value) => {
    setPrograms(prevPrograms => ({ ...prevPrograms, [floor]: value }));
  }

  const checkAnswer = (floor) => {
    const correctAnswers = {
      "5층": "음악",
      "4층": "미술",
      "3층": "체육",
      "2층": "요리",
      "1층 진료": "진료",
      "1층 물리치료": "물리치료"
    }

    if (programs[floor] === correctAnswers[floor]) {
      setFeedback(prevFeedback => ({ ...prevFeedback, [floor]: "O" }));
    } else {
      setFeedback(prevFeedback => ({ ...prevFeedback, [floor]: "X" }));
    }
  }

  return (
    <div style={{ marginTop: '2vh', marginBottom: '2vh' }}>
      <P58StairTitle />
      <P58Stair
        a="5층"
        c={
          <>
            <div>
              악기연주, 노래교실, 공연관람 등 노후의 건전한 여가문화를 위한
              <input
                type="text"
                value={programs["5층"]}
                onChange={(e) => handleInputChange("5층", e.target.value)}
                style={{
                  width: '100px',
                  textAlign: 'center',
                  margin: '0 5px',
                }}
              />
              프로그램이 진행됩니다.
              {/* <button onClick={() => checkAnswer("5층")}>확인</button>
              {feedback["5층"] && <span>{feedback["5층"]}</span>} */}
            </div>
          </>
        }
      />
      <P58Stair
        a="4층"
        c={
          <>
            <div>
              그림 그리기, 서예, 공예, 등 노후의 건전한 여가문화를 위한
              <input
                type="text"
                value={programs["4층"]}
                onChange={(e) => handleInputChange("4층", e.target.value)}
                style={{
                  width: '100px',
                  textAlign: 'center',
                  margin: '0 5px',
                }}
              />
              프로그램이 진행됩니다.
              {/* <button onClick={() => checkAnswer("4층")}>확인</button>
              {feedback["4층"] && <span>{feedback["4층"]}</span>} */}
            </div>
          </>
        }
      />
      <P58Stair
        a="3층"
        c={
          <>
            <div>
              탁구, 요가, 게이트볼, 스포츠댄스 등 노후의 건강한 신체유지를 위한
              <input
                type="text"
                value={programs["3층"]}
                onChange={(e) => handleInputChange("3층", e.target.value)}
                style={{
                  width: '100px',
                  textAlign: 'center',
                  margin: '0 5px',
                }}
              />
              프로그램이 진행됩니다.
              {/* <button onClick={() => checkAnswer("3층")}>확인</button>
              {feedback["3층"] && <span>{feedback["3층"]}</span>} */}
            </div>
          </>
        }
      />
      <P58Stair
        a="2층"
        c={
          <>
            <div>
              요리, 제과제빵, 바리스타(커피제조) 등 일상생활 참여 증진을 위한
              <input
                type="text"
                value={programs["2층"]}
                onChange={(e) => handleInputChange("2층", e.target.value)}
                style={{
                  width: '100px',
                  textAlign: 'center',
                  margin: '0 5px',
                }}
              />
              프로그램이 진행됩니다.
              {/* <button onClick={() => checkAnswer("2층")}>확인</button>
              {feedback["2층"] && <span>{feedback["2층"]}</span>} */}
            </div>
          </>
        }
      />
      <P58Stair
        a="1층"
        c={
          <>
            <div>
              건강상담, 응급처치, 물리치료 처방 등 의사의
              <input
                type="text"
                value={programs["1층 진료"]}
                onChange={(e) => handleInputChange("1층 진료", e.target.value)}
                style={{
                  width: '100px',
                  textAlign: 'center',
                  margin: '0 5px',
                }}
              />
              를 받을 수 있습니다. 
              {/* <button onClick={() => checkAnswer("1층 진료")}>확인</button>
              {feedback["1층 진료"] && <span>{feedback["1층 진료"]}</span>} */}
              <br />
              또한 운동치료, 전기자극치료 등
              <input
                type="text"
                value={programs["1층 물리치료"]}
                onChange={(e) => handleInputChange("1층 물리치료", e.target.value)}
                style={{
                  width: '100px',
                  textAlign: 'center',
                  margin: '0 5px',
                }}
              />
              서비스를 이용할 수 있습니다.
              {/* <button onClick={() => checkAnswer("1층 물리치료")}>확인</button>
              {feedback["1층 물리치료"] && <span>{feedback["1층 물리치료"]}</span>} */}
            </div>
          </>
        }
      />
    </div>
  )
}

export default P58AllStair

