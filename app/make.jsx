import React, { useState } from 'react';
import axios from 'axios';

function MakeSurvey() {
    const [surveyInfo, setSurveyInfo] = useState({
        title: '',
        creator: '',
        target: '',
        dateRange: '',
        introduction: '',
    });

    const [question, setQuestion] = useState({
        title: '',
        questionType: 'checkbox',
        options: ['옵션 1', '옵션 2', '옵션 3', '옵션 4'],
    });

    const handleChangeSurveyInfo = (e) => {
        const { name, value } = e.target;
        setSurveyInfo({ ...surveyInfo, [name]: value });
    };

    const handleChangeQuestion = (e) => {
        const { name, value } = e.target;
        setQuestion({ ...question, [name]: value });
    };

    const handleAddOption = () => {
        setQuestion({ ...question, options: [...question.options, ''] });
    };

    const handleSubmit = async () => {
        try {
            // surveyInfo와 question 데이터를 서버로 전송하는 코드 작성
            const response = await axios.post('/api/create-survey', {
                surveyInfo,
                question,
            });
            console.log('설문 등록 성공:', response.data);
        } catch (error) {
            console.error('설문 등록 실패:', error);
        }
    };

    return (
        <div>
            <h2>설문지 정보</h2>
            <table className="custom-table">
                <tbody>
                <tr>
                    <td>제목</td>
                    <td>
                        <input
                            type="text"
                            name="title"
                            value={surveyInfo.title}
                            onChange={handleChangeSurveyInfo}
                        />
                    </td>
                    <td>설문 등록자</td>
                    <td>
                        <input
                            type="text"
                            name="creator"
                            value={surveyInfo.creator}
                            onChange={handleChangeSurveyInfo}
                        />
                    </td>
                </tr>
                <tr>
                    <td>설문대상</td>
                    <td>
                        <input
                            type="text"
                            name="target"
                            value={surveyInfo.target}
                            onChange={handleChangeSurveyInfo}
                        />
                    </td>
                    <td>시작-마감일</td>
                    <td>
                        <input
                            type="text"
                            name="dateRange"
                            value={surveyInfo.dateRange}
                            onChange={handleChangeSurveyInfo}
                        />
                    </td>
                </tr>
                </tbody>
            </table>

            <table className="custom-table">
                <tbody>
                <tr>
                    <td>설문지 소개</td>
                    <td>
                        <input
                            type="text"
                            name="introduction"
                            value={surveyInfo.introduction}
                            onChange={handleChangeSurveyInfo}
                            placeholder="부가설명을 작성해주세요"
                        />
                    </td>
                </tr>
                </tbody>
            </table>

            <div className="custom-box">
                <h3>질문제목 입력</h3>
                <select
                    className="form-select"
                    name="questionType"
                    value={question.questionType}
                    onChange={handleChangeQuestion}
                >
                    <option value="checkbox">체크박스</option>
                    <option value="radio">단일선택</option>
                    <option value="text">단답형</option>
                    <option value="textarea">장문형</option>
                </select>
                <div className="option">
                    {question.options.map((option, index) => (
                        <div key={index}>
                            <input
                                type={question.questionType}
                                name="options"
                                value={option}
                                onChange={(e) => {
                                    const newOptions = [...question.options];
                                    newOptions[index] = e.target.value;
                                    setQuestion({ ...question, options: newOptions });
                                }}
                            />
                        </div>
                    ))}
                </div>
                <button type="button" onClick={handleAddOption}>
                    옵션 추가
                </button>
            </div>
            <button type="button" onClick={handleSubmit}>
                확인
            </button>
        </div>
    );
}

export default MakeSurvey;
