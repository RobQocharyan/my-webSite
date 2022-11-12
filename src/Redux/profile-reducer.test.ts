import profileReducer, { actions } from "./profile-reducer";

let state = {
  postData: [
    {id:1, message: "hi, how are you", count: 500 },
    {id:2, message: 'by", i love  you', count: 587 },
    {id:3, message: "Gooood", count: 457 },
    {id:4, message: "what is your name", count: 121 },
  ],
  profile:null,
  status: " ",
  newPostText:""
};

test("message of  posts should be correct", () => {
  let action = actions.addPostActionCreator("it-kamasutra");

  let newState = profileReducer(state, action);

  expect(newState.postData[4].message).toBe("it-kamasutra");
});

test("length of  posts should be incremenkted", () => {
  let action = actions.addPostActionCreator("it-kamasutra");
 
  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(5);
});



test("after delething length of messages  should be decrement", () => {
  let action = actions.deletePosts(1);
 
  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(3);
});

test("after delething length of should'nt be decrement if id incorrect", () => {
  let action = actions.deletePosts(1000);
 
  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(4);
});