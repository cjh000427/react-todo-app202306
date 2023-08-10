
// 브라우저에서 현재 클라이언트의 호스트 이름 얻어오기
const clientHostName = window.location.hostname;

let backEndHostName; // 백엔드 서버 호스트 이름

if(clientHostName === 'localhost') { //개발 중
    backEndHostName = 'http://localhost:8181';
    // backEndHostName = 'http://3.38.106.159';
} else if(clientHostName === 'my-todoapp-8792.s3-website.ap-northeast-2.amazonaws.com') { //배포해서 서비스 중
    backEndHostName = 'http://3.38.106.159';
}

export const API_BASE_URL = backEndHostName;
export const TODO = '/api/todos';
export const USER = '/api/auth';

