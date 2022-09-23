<p align="center">
  <a href="https://github.com/tportio/gql">
    <img alt="ONDA" src="https://avatars.githubusercontent.com/u/20039087?s=200&v=4" width="60" />
  </a>
</p>
<h1 align="center">
  Backoffice Front-end Repository
</h1>

## 🧐 주요 특징 Features

- Backoffice Front-end

## ✅ 사전 설정 Prerequisite

#### 1. Node 관련 설치

- node.js: `16.X` 이상 (AWS EB docker 사용 버전)

#### 다양한 노드 버전 사용법

레포마다 노드 버전이 다른 경우를 위하여 `nvm` 이나 `n` 등의 utility 를 이용하여 다양한 버전을 사용할 수 있습니다. <br>
아래는 `nvm` 을 사용한 간단한 방법입니다.

```bash
# install nvm
brew install nvm
# 특정 버전 설치
nvm install 16
# 특정 버전 사용하도록 설정
nvm use 16
# 특정 버전을 노드 기본이 되도록 설정
nvm alias default 16
```

## 🏃 실행 Execute

```bash
# local
npm run dev
```

## 📗 가이드 및 설명

### 1. 브랜치 전략

- 메인 브랜치(`master/develop`)에 직접적인 커밋(Commit)은 금지한다.
- 개발은 별도의 `작업 브랜치`를 생성하고 PR(Pull Request)을 올려 진행한다.
- 작업 브랜치 이름은 작업 내용에 따라 [명시적으로 정의](https://docs.microsoft.com/ko-kr/azure/devops/repos/git/git-branching-guidance?view=azure-devops#name-your-feature-branches-by-convention)한다.
  - `feat/feature-name`
  - `fix/description`
- 마스터에 배포되어 필요 없거나 사용하지 않는 브랜치는 **삭제**한다.

### 2. 메인 브랜치

- **develop**
  - 바로 배포할 수 있는 개발 배포 브랜치
  - 이 브랜치에 `작업 브랜치`에서 PR을 올려 코드 리뷰(Review)를 받는다.
  - 이 브랜치에 PR 시 `Validate`와 **코드 리뷰**를 통과해야 병합(Merge)할 수 있다.
  - 작업 브랜치에서 PR을 올리기 전에 `master` 소스를 `merge` 하여 사전에 발생할 충돌(Conflict)을 방지한다.
  - **코드리뷰**가 승인(Approve)되면 **Squash & Merge**로 병합(Merge)한다
  - 병합(Merge)이 끝난 작업브랜치는 삭제(Delete)한다
- **master**
  - hotfix or 배포 일정에 의해 배포하는 정식 배포 브랜치.
  - `develop` to `master` 일반적인 PR은 금지한다.
  - `develop` to `master` 병합(Merge)은 정해진 배포 일정에 맞춰서 진행한다.
  - `hotfix`가 긴급하게 필요한 경우에만 관리자가 배포를 진행한다.

### 3. GraphQL 주의사항

- [notion: 구 confluence wiki > GQL 백업링크](https://www.notion.so/onda/GQL-bb74bb4dc90b4d7baf6ad339f32c2e4f)
- [notion: 구 confluence wiki > GraphQL 백업링크](https://www.notion.so/onda/GraphQL-dae7804855ac45b8bc2410a4f3e5aa6f)

### 4. 코딩 컨벤션

### 5. 커밋 컨벤션

Conventional Commits <https://www.conventionalcommits.org/ko>

- **위 링크를 한번이라도 읽어보세요.**
- `fix:` patch(1.2.x) 버전 증가
- `feat:` minor(1.x.3) 버전 증가
- `BREAKING CHANGE:` major(x.2.3) 버전 증가
- 무작정 `fix`, `feat`를 남발하지 말고 버전을 올리는 경우가 아니라면 `refactor`, `perf` 등의 prefix를 사용한다.
- 지원 prefix [`build`, `ci`, `chore`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`]
- 아래 VSCode 확장 프로그램을 사용하면 절차적으로 입력할 수 있습니다.
  - <https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits>

### 6. 데이터베이스 변경

## 🚀 배포 Deploy

### EB Config

AWS Elastic Beanstalk는 이하 `EB`로 통칭한다.

- `app`: /var/app/current/
- `logs`: /var/log/eb-docker/containers/eb-current-app/eb-stdouterr.log
- `docker`: sudo docker ps -a

Backoffice Front-end는 깃허브 액션을 사용해 자동 배포합니다.

- 깃허브 액션에 대해서는 공식 문서를 읽어보는걸 추천합니다. [https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)

### 각각 workflow의 동작 설명

- [개발](https://github.com/tportio/onda-admin-web/actions/workflows/deploy-dev.yml)

  - `develop` 브런치에 push 하였을 때 동작
  - lint와 build를 실행
  - dev aws S3에 업로드

- [프로덕션]()
  - `master` 브런치에 push 하였을 때 동작
  - lint와 build를 실행
  - prod aws S3에 업로드
  - invalidate cloudfront

##### Link

## 💻 주요 패키지

| package        | current version | latest version |
| -------------- | --------------: | -------------: |
| `typescript`   |        `^4.6.4` |        `4.6.4` |
| `graphql`      |       `^16.5.0` |       `16.5.0` |
| `react`        |       `^18.2.0` |       `18.2.0` |
| `react-router` |        `^6.3.0` |        `6.3.0` |
| `redux`        |        `^4.1.2` |        `4.1.2` |
| `mui`          |        `^5.9.3` |        `5.9.3` |

## Folder Structure

```bash
├── public
├── src
│   ├── assets
│   ├── components
│   ├── containers
│   ├── gql
│   ├── layout
│   ├── modules
│   ├── routers
│   ├── utils
│   └── views
└── index.html
```

| Path            | Description                                         |
| --------------- | --------------------------------------------------- |
| /public         | 외부에 노출되어 접근이 가능한 폴더                  |
| /src            | 어플리케이션 전체 폴더                              |
| /src/assets     | image, css, scss, font등 asset을 관리하는 폴더      |
| /src/components | 재사용되는 컴포넌트를 관리하는 폴더                 |
| /src/containers | 재사용되는 컴포넌트의 집합을 만들어 관리하는 폴더   |
| /src/gql        | gql query를 관리하는 폴더                           |
| /src/layout     | 화면의 구조를 관리하는 폴더                         |
| /src/modules    | 어플리케이션에서 사용하는 각종 모듈을 관리하는 폴더 |
| /src/routers    | 어플리케이션의 url 구조를 관리하는 폴더             |
| /src/utils      | Util Class 집합 폴더                                |
| /src/views      | 화면을 구성하는 폴더                                |
