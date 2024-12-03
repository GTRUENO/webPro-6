import React from "react";
import "./P63Center.css";

const P63Center = ({ imageSrc, altText }) => {
    return (
        <>
            {/* 첫 번째 테이블 */}
            <table className="daily-table">
                <thead>
                    <tr>
                        <th colSpan="6" className="table-title">
                            나의 하루
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>방문한<br />장소</td>
                        <td colSpan="2" className="input-cell">
                            <input type="text" />
                        </td>
                        <td>오늘 만난<br />사람</td>
                        <td colSpan="2" className="input-cell">
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>구입한<br />물건</td>
                        <td colSpan="2" className="input-cell">
                            <input type="text" />
                        </td>
                        <td>지출 금액</td>
                        <td colSpan="2" className="input-cell">
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>오늘의<br />뉴스</td>
                        <td colSpan="5" className="input-cell">
                            <input type="text" />
                        </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th className="time-title">시각</th>
                        <th colSpan="5" className="schedule-title">
                            중요한 일
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>오전<br />5시~8시</td>
                        <td>일어 나서<br />한 일</td>
                        <td colSpan="4" className="input-cell">
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>오전<br />5시~8시</td>
                        <td>일어 나서<br />한 일</td>
                        <td colSpan="4" className="input-cell">
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>오전<br />5시~8시</td>
                        <td>일어 나서<br />한 일</td>
                        <td colSpan="1" className="input-cell">
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>오전<br />5시~8시</td>
                        <td>일어 나서<br />한 일</td>
                        <td colSpan="5" className="input-cell">
                            <input type="text" />
                        </td>
                    </tr>
                    <div className="bottom-spacing"></div>
                    <tr className="bottom-row">
                        <td>내일 계획</td>
                        <td colSpan="6" className="input-cell">
                            <input type="text" />
                        </td>
                    </tr>
                    <div className="bottom-spacing"></div>
                    <tr className="bottom-row">
                        <td>뇌건강을<br />위한<br />생활습관</td>
                        <td colSpan="6" className="input-cell">
                            <div className="text-no-margin">
                                <img src={imageSrc} alt="icon" className="left-image" />
                                <span className="highlighted-text">사회활동을 열심히 합시다.</span>
                            </div>
                            <div className="text-with-margin">
                                친목단체, 스포츠클럽, 종교 활동과 같은 단체 활동을 하는<br />
                                사람이 치매에 걸릴 확률이 1/4로 낮습니다.
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>



        </>
    );
};

export default P63Center;
