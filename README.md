the project is an counter 
has a 2 buttons one increase othet decrease the number 
i created it withe 2 bugs ::::
 i created a app compo parent 
and 2 others child compo counter and header 
in the app (parent ) i should give the (child) header a props =title a value = "the title"
in the Counter comp 
i installed the react dev tools 
on the chrome 
when it shows an red icon its working 
i inspect 
going to the compo tree it shows :::
on the counter inspect compo
props  
new entry: ""
hooks
1State : 0
on the header inspect compo
props
new entry : ""
Here’s how you'll know something's wrong:
>>>> also the consol ::
>>>> (Counter.js:8 Uncaught TypeError: Assignment to constant variable.
    at increment (Counter.js:8:1)  )
🔍 What You See	🚨 What It Means
A prop is undefined, null, or missing	You're not passing the prop correctly
State has unexpected value	Maybe setState isn’t updating or logic is wrong
Component doesn't render or crashes	Check props, errors in the Console tab
A component doesn’t re-render on change	Possibly not using state/props properly
