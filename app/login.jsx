import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        userid: '',
        password: '',
        depart: '',
        grade: ''
        // 여기에 다른 입력 필드 추가
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/signup', formData); // 서버의 API 엔드포인트로 POST 요청
            // 서버로부터의 응답(response)를 처리
            console.log('가입 성공:', response.data);
        } catch (error) {
            console.error('가입 실패:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="이름을 입력해주세요."
                required
            />
            {/* 다른 입력 필드 추가 */}
            <button type="submit">가입</button>
        </form>
    );
}

export default SignupForm;
