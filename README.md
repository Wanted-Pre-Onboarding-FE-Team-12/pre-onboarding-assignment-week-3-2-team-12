# pre-onboarding-assignment-week-3-2-team-12

스파크펫 과제입니다.

# 데모 링크

### [🚀🚀 데모 보러가기](https://wanted-team12-sparkpet.netlify.app/)

<br />

# 목차

- [실행](#1-실행)
- [폴더구조](#2-폴더구조)
- [과제 달성 사항 및 해결 방법](#3과제-달성-사항-및-해결-방법)

<br />
<br />

## 팀원

- [김재훈](https://github.com/rmawogns)
- [노기훈](https://github.com/ch4md0m)
- [정진우](https://github.com/jinux127) (팀장)
- [유지예](https://github.com/jiye-7)
- [이우윤](https://github.com/EEOOOO)
- [백광현](https://github.com/ghbaekdev)

<br/>
<br/>

## Tech Stack

<div>

- React
- TypeScript
- styled-components
- redux
- redux-thunk
- redux-promise

</div>

<br/>
<br/>

## 1. 실행

### 실행 방법

```sh
cd jy

npm install

npm run start
```

<br/>
<br/>

## 2. 폴더구조

```sh
src
├─ _api
│  └─ commentAPI.ts
├─ _module
│  ├─ comment.ts
│  ├─ configStore.ts
│  └─ index.ts
├─ components
│  ├─ Button
│  │  ├─ Button.tsx
│  │  └─ PageList.tsx
│  ├─ Comment
│  │  ├─ CommentItem
│  │  │  └─ CommentItem.tsx
│  │  ├─ CommentList
│  │  │  └─ CommentList.tsx
│  │  └─ WriteForm
│  │     └─ WriteForm.tsx
│  ├─ ListFilter
│  │  └─ ListFilter.tsx
│  ├─ Loading
│  │  └─ Loading.tsx
│  ├─ Navbar
│  │  └─ GlobalNavigationBar.tsx
│  └─ SelectOption
│     └─ SelectOption.tsx
├─ containers
│  ├─ CommentListContainer.tsx
│  ├─ FormContainer.tsx
│  └─ PageContainer.tsx
├─ pages
│  └─ Main
│     └─ Main.tsx
├─ styles
│  └─ style.ts
├─ types
│  └─ type.d.ts
├─ util
│  ├─ async.utill.ts
│  ├─ dataFormat.ts
│  └─ typeGuard.ts
├─ App.tsx
└─ index.tsx
```

<br/>
<br/>

## 3.과제 달성 사항 및 해결 방법

### 정진우

#### 댓글 불러오기 :

1. redux-thunk 적용 및 구현
2. useSelector 최적화

```js
const { data: comments, loading } = useSelector(
  (state) => ({
    data: state.comment.data,
    loading: state.comment.loading,
  }),
  shallowEqual
);
```

- 기존의 useSelector 는 렌더링마다 새로운 객체를 만들어 낭비 렌더링이 일어나게 되지만 react-redux의 shallowEqual 함수로 겉에 있는 값들을 비교하여 변화를 감지해 필요한 상황에만 리렌더링 되게 구현하였습니다.

<br/>

### 이우윤  

#### 댓글 불러오기 :

```js
async function fetchComments() {
    const fetchedComments = await getCommentList();
    dispatch(setCommentList(fetchedComments));
  }

  useEffect(() => {
    fetchComments();
  }, []);

  const { commentList, isLoading } = useSelector(state => {
    return state;
  });
  // 하단 코드 생략...
```
- fetching data를 action creator 이용해서 dispatching하고, useSelector로 불러오도록 단순한 Flux구조로 구현했습니다.

#### 페이지네이션 구현:

```js
const [currentPage, setCurrentPage] = useState(1);
const [commentsPerPage] = useState(5);
//페이지네이션 위한 인덱스 설정
const indexOfLastComment = currentPage * commentsPerPage;
const indexOfFirstComment = indexOfLastComment - commentsPerPage;
const currentComments = commentList.slice(indexOfFirstComment, indexOfLastComment);

const pagenate = pageNumber => setCurrentPage(pageNumber);
```
- 페이지별 인덱스 설정해 페이지네이션 설정했습니다.

