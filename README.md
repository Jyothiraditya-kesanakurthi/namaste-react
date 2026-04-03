npx Paracel index.html --https = this generates SSL certificate for our page

to solve this error ×
" TypeError: (0 , \_reactDomDefault.default).createRoot is not a function "

A.import ReactDOM from "react-dom/client";

Problm :Unhandled Rejection (TypeError): Failed to fetch
Sol : when you get exception like above download allow CROS extention and on it

doudt: const res_List = json?.data?.cards
?.slice(3)
?.map((c) => c?.card?.card?.info);

Ans: This is because the api we got doest not have list of restarents
we havae in cards from 3th card to last card we have restarents list thats why we use slice and mapped remaing path that is card.card.info

Prob:While installing latest react-roucter-dom we may get some exceptions try using react stable version

Sol:npm install react-router-dom@6

Problem: ReferenceError: itemCards is not defined
Sol : You will get these kind of exception when your

itemCards(Variable) does NOT exist in Swiggy API
So destructuring { itemCards } → gives undefined
