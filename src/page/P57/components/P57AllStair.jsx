import React from 'react'
import P57StairTitle from './P57StairTitle'
import P57Stair from './P57Stair'

const P57AllStair = () => {
    return (
        <div style={{ marginTop: '2vh', marginBottom: '2vh' }}>
            <P57StairTitle />
            <P57Stair a='5층' b='음악실' c='악기연주, 노래교실, 공연관람 등 노후의 건전한 여가문화를 위한 음악프로그램이 진행됩니다.' />
            <P57Stair a='4층' b='미술실' c='그림 그리기, 서예, 공예 등 노후의 건전한 여가문화를 위한 미술프로그램이 진행됩니다.' />
            <P57Stair a='3층' b='체육실' c='탁구, 요가, 게이트볼 스포츠댄스 등 노후의 건강한 신체유지를 위한 체육프로그램이 진행됩니다.' />
            <P57Stair a='2층' b='요리실' c='요리, 제과제빵, 바리스타(커피제조) 등 일상생활 참여 증진을 위한 요리프로그램이 진행됩니다.' />
            <P57Stair
                a="1층"
                b={
                    <>
                        진료실 <br /> & <br /> 물리치료실
                    </>
                }
                c={
                    <>
                        건강상담, 응급처치, 물리치료 처방 등 의사의 진료를 받을 수 있습니다. <br />
                        또한 운동치료, 전기자극치료 등 물리치료 서비스를 이용할 수 있습니다.
                    </>
                }
            />

        </div>
    )
}

export default P57AllStair