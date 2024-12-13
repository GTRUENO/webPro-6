import React, { useState } from 'react';
import './Login.css';
import { SectionA, SectionB, SectionD, SectionE, Title } from './Sections';
import { useNavigate } from 'react-router-dom'
function LoginPage() {
    const navigate = useNavigate() 
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleToggle = () => {
        setIsLogin(!isLogin);
        setFormData({ id: '', password: '', confirmPassword: '' });
    };

    const handleSubmit = () => {
        if (!formData.id.trim() || !formData.password.trim() || (!isLogin && !formData.confirmPassword.trim())) {
            alert("모든 필드를 입력해주세요.");
            return;
            
        }

        if (isLogin) {
            const storedUser = JSON.parse(localStorage.getItem(formData.id));
            if (storedUser && storedUser.password === formData.password) {
                alert(`로그인 성공!\n아이디: ${formData.id}`);
                console.log("Next button clicked!");
                navigate('/57');
            } else {
                alert("아이디 또는 비밀번호가 잘못되었습니다.");
            }
        } else {
            if (formData.password !== formData.confirmPassword) {
                alert("비밀번호가 일치하지 않습니다.");
                return;
            }
            if (localStorage.getItem(formData.id)) {
                alert("이미 존재하는 아이디입니다.");
                return;
            }
            localStorage.setItem(
                formData.id,
                JSON.stringify({ password: formData.password })
            );
            alert(`회원가입 성공!\n아이디: ${formData.id}`);
        }
    };

    return (
        <div className="main-container">
            <div className="login-status">
                <SectionA title={isLogin ? "로그인" : "회원가입"} />
            </div>
            <div className="login-container">
                <Title T="6조 57~63p" />
                <SectionB description={isLogin ? "회원가입 우선 진행 부탁드립니다!" : "회원가입을 하셨다면 로그인으로 전환해주세요."}/>
                <div className="login-container">
                    <div className="section-c">
                        <SectionD
                            label="아이디"
                            type="text"
                            id="id"
                            value={formData.id}
                            onChange={handleChange}
                        />
                        <SectionD
                            label="암호"
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {!isLogin && (
                            <SectionD
                                label="암호 확인"
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        )}
                        <SectionE buttonText={isLogin ? "입장" : "회원가입"} onClick={handleSubmit} />
                        <SectionE
                            buttonText={isLogin ? "회원가입으로 전환" : "로그인으로 전환"}
                            onClick={handleToggle}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
