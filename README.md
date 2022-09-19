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
│  │  └─ PageListButton.tsx       
│  ├─ Loading                     
│  │  ├─ Loading.css              
│  │  └─ Loading.tsx              
│  └─ Navbar                      
│     └─ GlobalNavigationBar.tsx  
├─ containers                     
│  ├─ CommentListContainer.tsx    
│  ├─ FormContainer.tsx           
│  └─ PageContainer.tsx           
├─ pages                          
│  ├─ Comment                     
│  │  ├─ CommentItem              
│  │  │  └─ CommentItem.tsx       
│  │  ├─ CommentList              
│  │  │  └─ CommentList.tsx       
│  │  └─ WriteForm                
│  │     └─ WriteForm.tsx         
│  ├─ Main                        
│  │  └─ Main.tsx                 
│  └─ SelectOption                
│     └─ SelectOption.tsx         
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
  state => ({
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
const currentComments = commentList.slice(
  indexOfFirstComment,
  indexOfLastComment
);

const pagenate = pageNumber => setCurrentPage(pageNumber);
```

- 페이지별 인덱스 설정해 페이지네이션 설정했습니다.

<br/>

### 김재훈

#### 댓글 불러오기, 삭제, 추가 :

redux-thunk 적용 및 구현

```js
export const fetchComment = createAsyncThunk('FETCH_COMMENT', async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const deleteComment = createAsyncThunk('DELETE_COMMENT', async id => {
  await axios.delete(`${URL}${id}`);
});

export const postComment = createAsyncThunk(
  'POST_COMMENT',
  async newComment => {
    const response = await axios.post(URL, newComment);
    return response.data;
  }
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchComment.fulfilled, (state, action) => [
      ...action.payload,
    ]);
    builder.addCase(deleteComment.fulfilled, (state, action) =>
      state.filter(comment => comment.id !== action.payload)
    );
    builder.addCase(postComment.fulfilled, (state, action) => [
      ...state,
      action.payload,
    ]);
  },
});
```

<br/>

### 노기훈

#### 댓글 불러오기 기능 구현

<details>
<summary> 1. redux-toolkit 적용</summary>

```jsx
function isPendingAction(action) {
  return action.type.endsWith('/pending');
}

function isRejectedAction(action) {
  return action.type.endsWith('/rejected');
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
      });
  },
});
```

</details>

<details>
<summary> 2. createAsynvThunk로 비동기 처리</summary>

```jsx
export const getComment = createAsyncThunk(
  'comment/get',
  async rejectWithValue => {
    try {
      const response = await commentApi.fetchGet();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
```

</details>

<br/>

### 유지예

<details>
<summary>1. redux-thunk, redux-promise 적용</summary>
<br/>

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
import logger from 'redux-logger';
import rootReducer from '_module';

const configureStore = () => {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(Thunk, Promise, logger))
	);

	return store;
};

export default configureStore;
```

</details>

<details>
<summary>2. 리덕스 모듈_Ducks Pattern 적용</summary>
<br/>

```js

/**
 * action type
 * */
const GET_COMMENTS = 'comment/GET_COMMENTS' as const;
const DELETE_COMMENT = 'comment/DELETE_COMMENT' as const;
const IS_UPDATE_MODE = 'IS_UPDATE_MODE' as const;
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT' as const;
const GET_PAGE_NATION_COMMENTS = 'comment/GET_PAGE_NATION_COMMENTS' as const;

/**
 * action create function
 */
export const getComments = () => {
	...
};

export const deleteComment = (id: number) => {
  ...
};

export const isUpdateModeValue = (isUpdateMode: boolean, updateRequestCommentId: number) => {
  ...
};

export const updateComment = (id: number, data: IComment) => {
	...
};

export const getPageNationComments = (pageRequestInfo: IPageRequest) => {
  return getPageNationCommentsApi(pageRequestInfo).then((response) => ({
		type: GET_PAGE_NATION_COMMENTS,
		payload: response,
	}));
};
interface ICommentState {
	comments: IComment[];
	isUpdateMode: boolean;
	updateRequestCommentId: number;
	totalComments?: number;
	totalCount: number;
}

const initialState: ICommentState = {
	comments: [],
	isUpdateMode: false,
	updateRequestCommentId: 0,
	totalComments: 0,
	totalCount: 0,
};

const commentReducer = (
	state: ICommentState = initialState,
	action: { type: string; payload: unknown }
): ICommentState => {
	switch (action.type) {
		case GET_COMMENTS: {
			...
		case DELETE_COMMENT:
			...
		case IS_UPDATE_MODE:
			...
		case UPDATE_COMMENT:
			...
		case GET_PAGE_NATION_COMMENTS:
			const comments = action.payload as IComment[];
			const totalCount = comments.splice(comments.length - 1)[0] as unknown as number;
			return { ...state, comments: action.payload as IComment[], totalCount };
		default:
			return state;
	}
};

export default commentReducer;

```

</details>

<details>
<summary>3. page nation</summary>
<br/>
- 기존 전체 리스트를 가져오는 /comments 에서 전체 게시글 수를 리덕스에 전역 상태로 관리
- 페이지네이션 url 응답 결과의 headers에 담겨있는 'x-total-count'를 사용하여 페이지네이션 구현

```js
/** page nation */
export const getPageNationCommentsApi = ({
	page,
	limitComments,
	orderType,
	sortType,
}: IPageRequest) => {
	return axios
		.get(
			`${BASE_URL}/comments?_page=${page}&_limit=${limitComments}&_order=${orderType}&_sort=${sortType}`
		)
		.then((response) => {
			const totalCount = Number(response.headers['x-total-count']);
			const responseData = [...response.data, totalCount];
			return responseData;
		});
};
```
</details>

4. 댓글 불러오기,작성, 수정, 삭제
