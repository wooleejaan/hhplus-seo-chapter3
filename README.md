# 항해플러스 Chapter 3 SEO 과제 - SEO 대응을 위한 최소 설정

## 개발환경 설정

[OG, 트위터 Meta 태그](./src/meta/index.tsx)

1. react-router-dom

React 컴포넌트 기반 라우팅 처리, 에러 페이지 구현

2. react-helmet-async

React 어플리케이션의 문서 head 태그 동적으로 관리 → SEO 대응

3. vite-plugin-sitemap

sitemap 자동생성 해주는 vite 플러그인 → 페이지 인덱싱 개선, 크롤링 효율성 개선, SEO 대응

4. react-snap

React 어플리케이션에서의 pre-rendering 지원 도구 → 매 페이지 meta pre-rendering을 통한 SEO 대응

## 파비콘 설정

1. android-chrome-192x192.png, android-chrome-512x512.png

   안드로이드 기기의 크롬 브라우저에서 표시하는 아이콘 파일

2. apple-touch-icon.png

   iOS 기기에서 웹사이트 홈 화면 추가할 때 사용하는 아이콘 파일

3. favicon-16x16.png, favicon-32x32.png

   브라우저 탭, 북마크 바, 히스토리 목록에서 사용하는 아이콘 파일

4. favicon.ico

   전통적인 파비콘 형식 → 구형 브라우저 호환 목적으로 사용하는 아이콘 파일

5. site.webmanifest

   웹을 웹앱으로 사용할 때 필요한 정보를 담은 파일

## SEO 분석

![alt text](/docs/image.png)

### 개선을 위한 작업 목록

https://seositecheckup.com/seo-audit/hhplus-seo-chapter3.vercel.app

1. html compression을 활성화해 페이지 크기와 로딩 시간 단축
2. h1, h2 태그 사용해 콘텐츠 구조와 계층 형성, 키워드 최적화
3. meta title, description 등에 키워드를 포함해야 함
4. 404 페이지의 경우, 도움 되는 링크와 정보를 포함해야 함
5. 반응형 대응을 위한 media query 사용
6. 웹 페이지 렌더링 차단하는 리소스 제거
7. cdn 서비스를 통해 리소스 캐싱 추가
8. ga를 추가해 방문자와 트래픽 모니터링
