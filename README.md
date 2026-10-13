# Boseok Kim — GitHub Pages

배포 주소: https://boseokkim-research.github.io  
저장소: `boseokkim-research/boseokkim-research.github.io`

영문·한국어 웹사이트의 완성된 정적 파일과 수정용 Next.js 소스가 함께 들어 있습니다. 루트의 `index.html`부터 바로 배포할 수 있으며, 운영 서버나 ChatGPT Sites 계정이 필요하지 않습니다.

## 가장 간단한 배포: main 브랜치의 루트

1. GitHub의 **boseokkim-research** 계정 또는 조직에서 **boseokkim-research.github.io** 저장소를 만듭니다. 지정한 사용자 사이트 주소는 소유자 이름도 `boseokkim-research`일 때 사용할 수 있습니다.
2. 기존 저장소를 업데이트한다면 기존 배포 파일을 교체하세요. 특히 `Boseok_Kim_CV.pdf`와 `source/public/Boseok_Kim_CV.pdf`가 이전 저장소에 남아 있다면 삭제해야 합니다. ZIP을 풀고 **그 안의 파일과 폴더 전체**를 저장소의 `main` 브랜치 루트에 업로드합니다. ZIP 파일 자체나 상위 폴더째 올리지 마세요. 저장소 첫 화면에서 `index.html`, `_next`, `ko`, `research`가 보여야 합니다.
3. `.nojekyll`도 반드시 포함합니다. 일부 파일 탐색기에서는 보이지 않을 수 있습니다. GitHub 웹 업로드에서 누락했다면 **Add file → Create new file**로 `.nojekyll`을 만들고 `# Static site` 한 줄을 넣어도 됩니다.
4. **Settings → Pages → Build and deployment**에서 **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**를 선택하고 Save를 누릅니다.
5. 배포가 완료되면 위 주소로 접속합니다.

빌드나 Node.js 설치는 최초 배포에 필요하지 않습니다. GitHub Pages의 Jekyll 처리를 비활성화하는 `.nojekyll`이 있어야 `_next` 파일이 정상 제공됩니다.

## 선택 사항: GitHub Actions 배포

위 브랜치 방식과 둘 중 하나를 선택합니다. **Settings → Pages → Source: GitHub Actions**를 선택하면 포함된 `.github/workflows/pages.yml`을 사용할 수 있습니다. Actions에서 **Deploy GitHub Pages → Run workflow**를 실행하세요. 브랜치 배포와의 중복 실행을 피하도록 수동 실행으로 설정했습니다. 이 워크플로는 이미 빌드된 루트 파일 중 `site-files.json`에 기록된 정적 파일만 배포합니다. `source/`와 작업용 문서는 배포 아티팩트에서 제외됩니다.

소스만 고친 후에는 아래 절차로 정적 파일을 다시 생성하고 함께 커밋해야 합니다. 워크플로가 원본 소스를 자동으로 빌드하지는 않습니다.

## 내용을 수정하고 다시 빌드하기

Node.js 22 이상을 사용합니다. 저장소 루트에서:

```sh
npm ci --prefix source
npm run build
```

`source/app`, `source/components`, `source/content`를 수정한 뒤 위 빌드를 실행하면 정적 결과가 저장소 루트에 갱신됩니다. 변경된 소스와 결과물을 함께 업로드하거나 커밋하세요. 생성된 HTML만 수정하면 클라이언트 코드와 불일치할 수 있으므로 원본 소스를 수정하는 방식을 권장합니다.

- 한국어 페이지: `source/app/ko/`
- 영문 페이지: `source/app/(en)/`
- 연구·교육·논문 데이터: `source/content/`
- 스타일: `source/app/globals.css`
- 사진·폰트: `source/public/`
- 배포 URL: 양 언어의 `layout.tsx`, `source/app/sitemap.ts`, `source/app/robots.ts`

## 경로와 새로고침

영문 `/`, `/research/`, `/publications/`, `/teaching/`, `/about/`, `/cv/`와 한국어 `/ko/` 및 대응하는 하위 경로에 각각 실제 `index.html`이 있습니다. 하위 페이지에 직접 접속하거나 새로고침해도 서버 라우팅 없이 열립니다. 존재하지 않는 주소에는 `404.html`을 사용합니다.

자산과 메뉴의 `/`로 시작하는 경로는 **사이트 루트 기준 경로**입니다. 지정한 `boseokkim-research.github.io` 사용자 사이트에서 올바르게 동작합니다. `/저장소이름/` 아래에 배포하는 별도의 프로젝트 사이트용 설정은 아닙니다. canonical, hreflang, sitemap, Person JSON-LD는 지정한 GitHub Pages 주소를 사용합니다. 공개 사이트에 맞춰 검색엔진 색인을 허용했습니다.

파일을 더블클릭하는 `file://` 방식 대신 정적 HTTP 서버로 확인하세요. Python이 설치돼 있다면 저장소 루트에서:

```sh
python -m http.server 8000
```

그런 다음 `http://localhost:8000/`을 엽니다. Python은 로컬 확인에만 사용하며 배포 서버에는 필요하지 않습니다.

## 포함 자료와 확인 범위

기존 디자인과 프리텐다드 폰트, 프로필 사진을 유지하고 요청하신 한국어·영문 본문, 논문, 교육 경력과 웹 CV를 업데이트했습니다. CV PDF와 다운로드 버튼은 제거했습니다. 원본 비공개 CV, 서명, 초안 인포그래픽, 내부 검토 문서는 포함하지 않았습니다.

정적 빌드와 TypeScript 검사, 12개 페이지 직접 요청, 내부 링크·자산·앵커 경로, 이전 도메인 잔존 여부를 확인했습니다. GitHub 계정에 로그인하거나 저장소를 생성·업로드·실제 배포한 것은 아닙니다.

Pretendard v1.3.9는 자체 호스팅하며 라이선스는 `fonts/pretendard/LICENSE.txt`에 포함되어 있습니다.

공식 참고:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
