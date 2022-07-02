import profileReducer, { addPostActionCreator, deletePosts } from "./profile-reducer";

let state = {
  postData: [
    { message: "hi, how are you", count: 500 },
    { message: 'by", i love  you', count: 587 },
    { message: "Gooood", count: 457 },
    { message: "what is your name", count: 121 },
  ]
};

test("message of  posts should be correct", () => {
  let action = addPostActionCreator("it-kamasutra");

  let newState = profileReducer(state, action);

  expect(newState.postData[4].message).toBe("it-kamasutra");
});

test("length of  posts should be incremenkted", () => {
  let action = addPostActionCreator("it-kamasutra");
 
  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(5);
});



test("after delething length of messages  should be decrement", () => {
  let action = deletePosts(1);
 
  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(3);
});

test("after delething length of should'nt be decrement if id incorrect", () => {
  let action = deletePosts(1000);
 
  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(4);
});