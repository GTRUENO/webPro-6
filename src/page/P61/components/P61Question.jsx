import React from "react";
import P61InputFields from "./P61InputFields";
import "../61P.css";

const P61Question = () => {
  return (
    <div>
      <hr style={{ margin: "5px 0" }} />
      <h3 style={{ marginBottom: "3px" }}>성주</h3>
      <p style={{ marginBottom: "10px", lineHeight: "1.4" }}>
        어휴 날이 너무 덥다. 온 몸에 힘도 없고 입맛도 없는 게 아무래도 더위를 먹은 것 같아.
        내일 사물놀이 공연을 제대로 보려면, 오늘은 의사 선생님께 진료를 보고 집에 가서 푹 쉬어야겠어.
      </p>
      <hr style={{ margin: "5px 0" }} />
      <h3 style={{ marginBottom: "3px" }}>상구</h3>
      <p style={{ marginBottom: "10px", lineHeight: "1.4" }}>
        그래 성주야. 우리같이 나이든 사람들은 건강을 제일 조심해야해. 그나저나 다들 댄스스포츠 수업 들어봤니?
        나는 이번 주 내내 듣는데, 너무 재밌더라. 음악에 맞춰 춤 추다보면 시간 가는 줄 모르겠더라고.
      </p>
      <hr style={{ margin: "5px 0" }} />
      <h3 style={{ marginBottom: "3px" }}>양심</h3>
      <p style={{ marginBottom: "10px", lineHeight: "1.4" }}>
        나도 저번에 들어봤는데, 난 몸이 잘 안 움직여서 좀 힘들었어, 그러고 보면 우리 복지관에 참 재밌는
        프로그램이 많은 것 같아. 난 오늘이랑 내일 사물놀이 공연을 관람할 거야.
      </p>
      <hr style={{ margin: "5px 0" }} />
      <h3 style={{ marginBottom: "3px" }}>정선</h3>
      <p style={{ marginBottom: "10px", lineHeight: "1.4" }}>
        우리 복지관에 사물놀이 공연도 오는구나. 멋지겠는 걸? 나도 다음번에 신청해야겠다. 나는 이번 주 내내
        있을 붓글씨 수업 때 필요한 붓이랑 화선지를 사왔어. 글씨를 쓰다보면 마음이 차분해지는 것 같아.
      </p>
      <hr style={{ margin: "10px 0" }} />
      <P61InputFields />
    </div>
  );
};

export default P61Question;
