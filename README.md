# my-note-app

리액트 네이티브를 처음 독학하면서 만든 노트앱 입니다.

상태관리로 **useReducer**와 **context API**를 사용했습니다.

reducer 함수에 배열 메서드(map과 filter함수 사용)를 사용함으로써 상태를 추가, 삭제, 업데이트 등
기능을 익히는데에 공부가 되었습니다.

context API 는 state와 props 만으로는 다루기 까다로웠던 상태를 전역으로 관리할 수 있어 깔끔한 코드 사용과 dispatch 사용에도 도움이 되었습니다.

## 노트의 기능

1. 새 노트 생성
2. 카테고리 생성 & 선택
3. 노트 삭제
4. 노트 업데이트
5. 카테고리 정렬
6. 검색 기능

---

### 00. Main page

Animated 를 이용하여 scroll에 변화를 주었을 때 상단 Navbar에 애니메이션이 적용됩니다.

![note_app_01](https://user-images.githubusercontent.com/71235165/99968011-f4052e00-2ddb-11eb-93f1-e50c0ea3d5ec.gif)

### 01. 새 노트 생성

![note_app_02](https://user-images.githubusercontent.com/71235165/99971098-1731dc80-2de0-11eb-89d9-cd2e70dc7a41.gif)


### 02. 카테고리 생성 & 선택

![note_app_03](https://user-images.githubusercontent.com/71235165/99974171-eb185a80-2de3-11eb-8f3a-92918dbb077c.gif)

### 03. 노트 삭제

onLongPress 에 애니메이션을 넣어 Radio버튼이 자연스럽게 나타납니다.

#### 부분 삭제

![note_app_04](https://user-images.githubusercontent.com/71235165/99974846-d4263800-2de4-11eb-934a-dd8e05c6908f.gif)

#### 전체 삭제

![note_app_05](https://user-images.githubusercontent.com/71235165/99975361-79d9a700-2de5-11eb-86b0-7b9071136cd5.gif)

### 04. 노트 업데이트

![note_app_06](https://user-images.githubusercontent.com/71235165/99976875-5283d980-2de7-11eb-8407-5f44fed9383c.gif)

#### 변경내용이 공란일 경우 (Toast)알림메세지와 함께 삭제됩니다.

![note_app_07](https://user-images.githubusercontent.com/71235165/99977324-d342d580-2de7-11eb-9e6f-0d9477c54c32.gif)

### 05. 카테고리 정렬 (Drawer Navigation 사용)

![note_app_08](https://user-images.githubusercontent.com/71235165/99978060-d25e7380-2de8-11eb-9f82-d9a629a3941b.gif)

### 06. 검색 기능

검색해서 나온 컴포넌트에 수정까지 가능하도록 구현하였습니다.

![note_app_09](https://user-images.githubusercontent.com/71235165/99980534-b1e3e880-2deb-11eb-889a-ffa5152ebfdf.gif)
