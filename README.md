sandbox.io

counter app - done
setX(x+1)

dark mode - done
T/F
.DM{ bgc: black, color: white }

modal popup - done
overlay - F
popup - e.stopPropagation()
close - F

sidebar - done
fixed w-40%
left : 0 / -40%
transition 1s

simple interest - done
states for P,R,T 
for onChange :-
useEffect(,[P,R,T])

FAQ component - done 
make in different file and map
send Q and A as probs

weather data - done
states for city, loading, error, data
result = await axios.get(------`${city}`)
if (result.data)
	log(result.data)
	setData(result.data)

tabs component - done
onClick- setActiveTab(1)

responsive navbar - done
make 2 navbars for pc and mobile
mobile nav : = and x button
close on link click also
conditionally render nav using
window.innerWidth in useEffect
window.addEventListener('resize',)

image slider - done
next - setX(x+1)
if else to reset ends
img src=slides[x]
for dots map the slides
onClick - setX(index)
x==index ? big:small
setInterval normally

calculator - done
button value="1"
onClick setValue
setInput(input+e.target.value)
eval(input)
.toFixed(2)
try catch
back input.slice(0, -1)

digital clock - done
new Date().toLocaleDateString()
new Date().toLocaleTimeString()

star rating component - done
make an array and map
make a state for rating
the one on which it is clicked make it coloured
change == to <=

multi step form - done
same as tabs 
width bar
disabled next and prev 
submit button if last tab

