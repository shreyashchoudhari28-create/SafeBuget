import React,{useState} from "react";
import {
View,
Text,
ScrollView,
TouchableOpacity,
TextInput,
Alert,
} from "react-native";

const App=()=>{

const[screen,setScreen]=useState("dashboard");

const[budget,setBudget]=useState("");
const[expense,setExpense]=useState("");
const[spent,setSpent]=useState(0);

const addExpense=()=>{

if(expense==="") return;

const newSpent=spent+Number(expense);

if(newSpent>Number(budget)){

Alert.alert(
"Budget Exceeded",
"You don't have enough budget left."
);

return;

}

setSpent(newSpent);

if(newSpent===Number(budget)){
Alert.alert(
"Budget Finished",
"You have used your complete travel budget."
);
}
setExpense("");

};
if(screen==="budget"){

const remaining=Number(budget||0)-spent;

return(

<ScrollView
style={{
flex:1,
backgroundColor:"#0F172A",
}}
>

<View
style={{
backgroundColor:"#1E293B",
padding:30,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
}}
>

<Text
style={{
fontSize:30,
fontWeight:"bold",
color:"white",
}}
>
💰 Budget Manager
</Text>

<Text
style={{
color:"#CBD5E1",
marginTop:5,
}}
>
Manage your travel expenses
</Text>

</View>

<View
style={{
backgroundColor:"#1E293B",
margin:20,
padding:20,
borderRadius:20,
}}
>

<Text
style={{
color:"white",
fontSize:18,
}}
>
Enter Total Budget
</Text>

<TextInput
value={budget}
onChangeText={(text)=>setBudget(text)}
keyboardType="numeric"
placeholder="Enter Budget"
placeholderTextColor="gray"
style={{
backgroundColor:"#334155",
marginTop:12,
padding:15,
borderRadius:15,
color:"white",
fontSize:20,
}}
/>

</View>

<View
style={{
backgroundColor:"#1E293B",
marginHorizontal:20,
padding:20,
borderRadius:20,
}}
>

<Text
style={{
color:"white",
fontSize:18,
}}
>
Add Expense
</Text>

<TextInput
value={expense}
onChangeText={setExpense}
keyboardType="numeric"
placeholder="Enter Expense"
placeholderTextColor="gray"
style={{
backgroundColor:"#334155",
marginTop:12,
padding:15,
borderRadius:15,
color:"white",
fontSize:20,
}}
/>

<TouchableOpacity
style={{
backgroundColor:"#22C55E",
padding:15,
borderRadius:15,
marginTop:15,
alignItems:"center",
}}
onPress={addExpense}
>

<Text
style={{
color:"white",
fontSize:18,
fontWeight:"bold",
}}
>
Add Expense
</Text>

</TouchableOpacity>

</View>

<View
style={{
backgroundColor:"#1E293B",
margin:20,
padding:20,
borderRadius:20,
}}
>

<Text
style={{
fontSize:18,
color:"white",
}}
>
Total Budget
</Text>

<Text
style={{
fontSize:30,
fontWeight:"bold",
color:"#22C55E",
marginTop:8,
}}
>
₹{budget}
</Text>

<Text
style={{
fontSize:18,
color:"white",
marginTop:20,
}}
>
Spent
</Text>

<Text
style={{
fontSize:30,
fontWeight:"bold",
color:"#EF4444",
marginTop:8,
}}
>
₹{spent}
</Text>

<Text
style={{
fontSize:18,
color:"white",
marginTop:20,
}}
>
Remaining
</Text>

<Text
style={{
fontSize:30,
fontWeight:"bold",
color:"#3B82F6",
marginTop:8,
}}
>
₹{remaining}
</Text>

</View>

<TouchableOpacity
style={{
backgroundColor:"#2563EB",
margin:20,
padding:18,
borderRadius:18,
alignItems:"center",
}}
onPress={()=>setScreen("dashboard")}
>

<Text
style={{
color:"white",
fontSize:18,
fontWeight:"bold",
}}
>
← Back to Dashboard
</Text>

</TouchableOpacity>

</ScrollView>

);

}
if(screen==="dashboard"){
return(
<ScrollView style={{flex:1,backgroundColor:"#0F172A"}}>

<View style={{
backgroundColor:"#1E293B",
padding:30,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
}}>

<Text style={{
fontSize:30,
fontWeight:"bold",
color:"white",
}}>
SafeBudget
</Text>

<Text style={{
fontSize:16,
color:"#CBD5E1",
marginTop:5,
}}>
Travel Safe • Spend Smart
</Text>

<View style={{
backgroundColor:"#334155",
marginTop:20,
padding:15,
borderRadius:15,
}}>

<Text style={{
color:"white",
fontSize:16,
}}>
Current Budget
</Text>

<Text style={{
color:"#22C55E",
fontSize:28,
fontWeight:"bold",
}}>
₹{budget}
</Text>

<Text style={{
color:"#CBD5E1",
marginTop:5,
}}>
Remaining : ₹{Number(budget)-spent}
</Text>

</View>

</View>

<TouchableOpacity
style={{
backgroundColor:"#EF4444",
margin:20,
padding:20,
borderRadius:20,
alignItems:"center",
}}
onPress={()=>setScreen("sos")}
>

<Text style={{
color:"white",
fontSize:22,
fontWeight:"bold",
}}>
🚨 SOS EMERGENCY
</Text>

</TouchableOpacity>

<View style={{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-evenly",
}}>

<TouchableOpacity
style={{
backgroundColor:"#22C55E",
width:"42%",
padding:25,
borderRadius:20,
marginBottom:15,
}}
onPress={()=>setScreen("budget")}
>

<Text style={{fontSize:35}}>💰</Text>

<Text style={{
color:"white",
fontSize:18,
fontWeight:"bold",
marginTop:10,
}}>
Budget Manager
</Text>

</TouchableOpacity>

<TouchableOpacity
style={{
backgroundColor:"#F59E0B",
width:"42%",
padding:25,
borderRadius:20,
marginBottom:15,
}}
onPress={()=>setScreen("safety")}
>

<Text style={{fontSize:35}}>🛡️</Text>

<Text style={{
color:"white",
fontSize:18,
fontWeight:"bold",
marginTop:10,
}}>
Safety
</Text>

</TouchableOpacity>

<TouchableOpacity
style={{
backgroundColor:"#3B82F6",
width:"42%",
padding:25,
borderRadius:20,
marginBottom:15,
}}
onPress={()=>setScreen("nearby")}
>

<Text style={{fontSize:35}}>📍</Text>

<Text style={{
color:"white",
fontSize:18,
fontWeight:"bold",
marginTop:10,
}}>
Nearby
</Text>

</TouchableOpacity>

<TouchableOpacity
style={{
backgroundColor:"#8B5CF6",
width:"42%",
padding:25,
borderRadius:20,
marginBottom:15,
}}
onPress={()=>setScreen("currency")}
>

<Text style={{fontSize:35}}>💱</Text>

<Text style={{
color:"white",
fontSize:18,
fontWeight:"bold",
marginTop:10,
}}>
Currency
</Text>

</TouchableOpacity>

</View>

<View style={{
backgroundColor:"#1E293B",
margin:20,
padding:20,
borderRadius:20,
}}>

<Text style={{
color:"white",
fontSize:20,
fontWeight:"bold",
}}>
Area Safety Score
</Text>

<Text style={{
color:"#22C55E",
fontSize:42,
fontWeight:"bold",
marginTop:10,
}}>
92 / 100
</Text>

<Text style={{
color:"#CBD5E1",
marginTop:10,
}}>
✔ Safe for tourists

{"\n"}✔ Police nearby

{"\n"}✔ Hospitals available

{"\n"}✔ Verified transport available
</Text>

</View>

</ScrollView>
);
}
if(screen==="safety"){
return(
<ScrollView style={{flex:1,backgroundColor:"#0F172A"}}>

<View style={{
backgroundColor:"#F59E0B",
padding:30,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
}}>

<Text style={{
fontSize:30,
fontWeight:"bold",
color:"white",
}}>
🛡️ Safety Center
</Text>

<Text style={{
color:"white",
marginTop:5,
}}>
Live safety information
</Text>

</View>

<View style={{
backgroundColor:"#1E293B",
margin:20,
padding:20,
borderRadius:20,
}}>

<Text style={{
fontSize:20,
fontWeight:"bold",
color:"white",
}}>
Current Safety Score
</Text>

<Text style={{
fontSize:50,
fontWeight:"bold",
color:"#22C55E",
marginTop:10,
}}>
92%
</Text>

<Text style={{color:"#CBD5E1",marginTop:15}}>
✔ Tourist Friendly
</Text>

<Text style={{color:"#CBD5E1",marginTop:8}}>
✔ Police Patrol Available
</Text>

<Text style={{color:"#CBD5E1",marginTop:8}}>
✔ CCTV Surveillance
</Text>

<Text style={{color:"#CBD5E1",marginTop:8}}>
✔ Emergency Services Nearby
</Text>

</View>

<TouchableOpacity
style={{
backgroundColor:"#2563EB",
margin:20,
padding:18,
borderRadius:18,
alignItems:"center",
}}
onPress={()=>setScreen("dashboard")}
>

<Text style={{
color:"white",
fontSize:18,
fontWeight:"bold",
}}>
← Back
</Text>

</TouchableOpacity>

</ScrollView>
);
}

if(screen==="nearby"){
return(
<ScrollView style={{flex:1,backgroundColor:"#0F172A"}}>

<View style={{
backgroundColor:"#3B82F6",
padding:30,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
}}>

<Text style={{
fontSize:30,
fontWeight:"bold",
color:"white",
}}>
📍 Nearby Services
</Text>

<Text style={{
color:"white",
marginTop:5,
}}>
Everything around your location
</Text>

</View>

<View style={{
backgroundColor:"#1E293B",
margin:20,
padding:18,
borderRadius:18,
}}>
<Text style={{fontSize:20,color:"white"}}>👮 Police Station</Text>
<Text style={{color:"#CBD5E1",marginTop:5}}>850 m</Text>
</View>

<View style={{
backgroundColor:"#1E293B",
marginHorizontal:20,
padding:18,
borderRadius:18,
marginBottom:15,
}}>
<Text style={{fontSize:20,color:"white"}}>🏥 Hospital</Text>
<Text style={{color:"#CBD5E1",marginTop:5}}>1.2 km</Text>
</View>

<View style={{
backgroundColor:"#1E293B",
marginHorizontal:20,
padding:18,
borderRadius:18,
marginBottom:15,
}}>
<Text style={{fontSize:20,color:"white"}}>🏧 ATM</Text>
<Text style={{color:"#CBD5E1",marginTop:5}}>500 m</Text>
</View>

<View style={{
backgroundColor:"#1E293B",
marginHorizontal:20,
padding:18,
borderRadius:18,
marginBottom:15,
}}>
<Text style={{fontSize:20,color:"white"}}>⛽ Petrol Pump</Text>
<Text style={{color:"#CBD5E1",marginTop:5}}>600 m</Text>
</View>

<View style={{
backgroundColor:"#1E293B",
marginHorizontal:20,
padding:18,
borderRadius:18,
marginBottom:15,
}}>
<Text style={{fontSize:20,color:"white"}}>🏨 Hotel</Text>
<Text style={{color:"#CBD5E1",marginTop:5}}>900 m</Text>
</View>

<View style={{
backgroundColor:"#1E293B",
marginHorizontal:20,
padding:18,
borderRadius:18,
marginBottom:15,
}}>
<Text style={{fontSize:20,color:"white"}}>🍴 Restaurant</Text>
<Text style={{color:"#CBD5E1",marginTop:5}}>450 m</Text>
</View>

<View style={{
backgroundColor:"#1E293B",
marginHorizontal:20,
padding:18,
borderRadius:18,
marginBottom:20,
}}>
<Text style={{fontSize:20,color:"white"}}>💊 Pharmacy</Text>
<Text style={{color:"#CBD5E1",marginTop:5}}>300 m</Text>
</View>

<TouchableOpacity
style={{
backgroundColor:"#2563EB",
margin:20,
padding:18,
borderRadius:18,
alignItems:"center",
}}
onPress={()=>setScreen("dashboard")}
>

<Text style={{
color:"white",
fontSize:18,
fontWeight:"bold",
}}>
← Back
</Text>

</TouchableOpacity>

</ScrollView>
);
} 
if(screen==="currency"){
const rates={
USD:86.20,
EUR:101.40,
GBP:118.70,
AED:23.50,
SAR:22.90,
JPY:0.58,
CNY:12.00,
AUD:56.30,
CAD:63.50,
SGD:67.40,
CHF:108.50,
NZD:52.80,
THB:2.65,
MYR:20.40,
KRW:0.063,
HKD:11.00,
QAR:23.60,
KWD:281.30,
BHD:228.40,
OMR:224.10,
};

return(
<ScrollView style={{flex:1,backgroundColor:"#0F172A"}}>

<View style={{
backgroundColor:"#8B5CF6",
padding:30,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
}}>

<Text style={{
fontSize:30,
fontWeight:"bold",
color:"white",
}}>
💱 Currency Converter
</Text>

<Text style={{
color:"white",
marginTop:5,
}}>
Popular Currency Rates
</Text>

</View>

{Object.entries(rates).map(([name,value])=>(
<View
key={name}
style={{
backgroundColor:"#1E293B",
marginHorizontal:20,
marginTop:15,
padding:18,
borderRadius:18,
flexDirection:"row",
justifyContent:"space-between",
}}
>

<Text style={{
fontSize:18,
color:"white",
fontWeight:"bold",
}}>
{name}
</Text>

<Text style={{
fontSize:18,
color:"#22C55E",
fontWeight:"bold",
}}>
₹ {value}
</Text>

</View>
))}

<View style={{
backgroundColor:"#1E293B",
margin:20,
padding:20,
borderRadius:18,
}}>

<Text style={{
color:"white",
fontSize:18,
fontWeight:"bold",
}}>
Travel Tip
</Text>

<Text style={{
color:"#CBD5E1",
marginTop:10,
lineHeight:22,
}}>
Always compare exchange rates before converting money and avoid exchanging currency at airports unless necessary.
</Text>

</View>

<TouchableOpacity
style={{
backgroundColor:"#2563EB",
margin:20,
padding:18,
borderRadius:18,
alignItems:"center",
}}
onPress={()=>setScreen("dashboard")}
>

<Text style={{
fontSize:18,
fontWeight:"bold",
color:"white",
}}>
← Back
</Text>

</TouchableOpacity>

</ScrollView>
);
}
if(screen==="sos"){
return(
<ScrollView style={{flex:1,backgroundColor:"#0F172A"}}>

<View style={{
backgroundColor:"#DC2626",
padding:30,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
alignItems:"center",
}}>
<Text style={{fontSize:70}}>🚨</Text>

<Text style={{
fontSize:30,
fontWeight:"bold",
color:"white",
marginTop:10,
}}>
SOS Emergency
</Text>

<Text style={{
color:"white",
marginTop:10,
textAlign:"center",
}}>
Press the button below to send an emergency request.
</Text>
</View>

<View style={{
backgroundColor:"#1E293B",
margin:20,
padding:20,
borderRadius:20,
}}>
<Text style={{fontSize:18,color:"white"}}>
📍 Current Location
</Text>

<Text style={{
color:"#CBD5E1",
marginTop:8,
}}>
Your Live Location will be shared.
</Text>

<Text style={{
fontSize:18,
color:"white",
marginTop:20,
}}>
👨‍👩‍👧 Emergency Contacts
</Text>

<Text style={{
color:"#CBD5E1",
marginTop:8,
}}>
Family • Friends
</Text>

<Text style={{
fontSize:18,
color:"white",
marginTop:20,
}}>
👮 Police Assistance
</Text>

<Text style={{
color:"#CBD5E1",
marginTop:8,
}}>
Nearest Police Station will be notified.
</Text>
</View>

<TouchableOpacity
style={{
backgroundColor:"#EF4444",
marginHorizontal:20,
padding:20,
borderRadius:20,
alignItems:"center",
}}
onPress={()=>setScreen("sossent")}
>
<Text style={{
color:"white",
fontSize:22,
fontWeight:"bold",
}}>
SEND SOS
</Text>
</TouchableOpacity>

<TouchableOpacity
style={{
backgroundColor:"#2563EB",
margin:20,
padding:18,
borderRadius:18,
alignItems:"center",
}}
onPress={()=>setScreen("dashboard")}
>
<Text style={{
color:"white",
fontSize:18,
fontWeight:"bold",
}}>
← Back
</Text>
</TouchableOpacity>

</ScrollView>
);
}

if(screen==="sossent"){
return(
<ScrollView style={{flex:1,backgroundColor:"#0F172A"}}>

<View style={{
backgroundColor:"#16A34A",
padding:30,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
alignItems:"center",
}}>
<Text style={{fontSize:70}}>✅</Text>

<Text style={{
fontSize:30,
fontWeight:"bold",
color:"white",
marginTop:10,
}}>
SOS Sent Successfully
</Text>

<Text style={{
color:"white",
marginTop:10,
textAlign:"center",
}}>
Your emergency request has been sent.
</Text>
</View>

<View style={{
backgroundColor:"#1E293B",
margin:20,
padding:20,
borderRadius:20,
}}>

<Text style={{fontSize:18,color:"white"}}>
📍 Live Location Shared
</Text>

<Text style={{color:"#22C55E",marginTop:8}}>
✔ Location sent successfully
</Text>

<Text style={{
fontSize:18,
color:"white",
marginTop:20,
}}>
👨‍👩‍👧 Emergency Contacts
</Text>

<Text style={{color:"#22C55E",marginTop:8}}>
✔ Notified Successfully
</Text>

<Text style={{
fontSize:18,
color:"white",
marginTop:20,
}}>
👮 Police Station
</Text>

<Text style={{color:"#22C55E",marginTop:8}}>
✔ Alert Sent
</Text>

<Text style={{
fontSize:18,
color:"white",
marginTop:20,
}}>
🏥 Nearby Hospital
</Text>

<Text style={{color:"#22C55E",marginTop:8}}>
Civil Hospital - 1.2 km
</Text>

<Text style={{
fontSize:18,
color:"white",
marginTop:20,
}}>
🚖 Safe Cab
</Text>

<Text style={{color:"#22C55E",marginTop:8}}>
Nearest Verified Cab Available
</Text>

</View>

<TouchableOpacity
style={{
backgroundColor:"#2563EB",
margin:20,
padding:18,
borderRadius:18,
alignItems:"center",
}}
onPress={()=>setScreen("dashboard")}
>
<Text style={{
color:"white",
fontSize:18,
fontWeight:"bold",
}}>
Return to Dashboard
</Text>
</TouchableOpacity>

</ScrollView>
);
}

return null;
};

export default App;