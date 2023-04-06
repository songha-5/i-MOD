var dummyDriveData = [
    {
    "time": "3시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "4시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "5시",
    "success": 1265,
    "cancelBefore": 152,
    "cancelAfter": 78,
    "impossibility": 63,
}, {
    "time": "6시",
    "success": 2524,
    "cancelBefore": 145,
    "cancelAfter": 110,
    "impossibility": 224,
}, {
    "time": "7시",
    "success": 1325,
    "cancelBefore": 87,
    "cancelAfter": 127,
    "impossibility": 182,
}, {
    "time": "8시",
    "success": 134,
    "cancelBefore": 25,
    "cancelAfter": 3,
    "impossibility": 216,
}, {
    "time": "9시",
    "success": 88,
    "cancelBefore": 21,
    "cancelAfter": 5,
    "impossibility": 255,
}, {
    "time": "10시",
    "success": 126,
    "cancelBefore": 24,
    "cancelAfter": 0,
    "impossibility": 9,
}, {
    "time": "11시",
    "success": 125,
    "cancelBefore": 24,
    "cancelAfter": 0,
    "impossibility": 156,
}, {
    "time": "12시",
    "success": 142,
    "cancelBefore": 40,
    "cancelAfter": 2,
    "impossibility": 199,
}, {
    "time": "13시",
    "success": 162,
    "cancelBefore": 25,
    "cancelAfter": 0,
    "impossibility": 154,
}, {
    "time": "14시",
    "success": 120,
    "cancelBefore": 13,
    "cancelAfter": 22,
    "impossibility": 127,
}, {
    "time": "15시",
    "success": 184,
    "cancelBefore": 42,
    "cancelAfter": 21,
    "impossibility": 129,
}, {
    "time": "16시",
    "success": 155,
    "cancelBefore": 40,
    "cancelAfter": 4,
    "impossibility": 217,
}, {
    "time": "17시",
    "success": 395,
    "cancelBefore": 103,
    "cancelAfter": 6,
    "impossibility": 226,
}, {
    "time": "18시",
    "success": 1168,
    "cancelBefore": 264,
    "cancelAfter": 70,
    "impossibility": 400,
}, {
    "time": "19시",
    "success": 837,
    "cancelBefore": 205,
    "cancelAfter": 99,
    "impossibility": 276,
}, {
    "time": "20시",
    "success": 209,
    "cancelBefore": 36,
    "cancelAfter": 20,
    "impossibility": 200,
}, {
    "time": "21시",
    "success": 161,
    "cancelBefore": 27,
    "cancelAfter": 4,
    "impossibility": 130,
}, {
    "time": "22시",
    "success": 161,
    "cancelBefore": 27,
    "cancelAfter": 0,
    "impossibility": 130,
}, {
    "time": "23시",
    "success": 141,
    "cancelBefore": 24,
    "cancelAfter": 0,
    "impossibility": 104,
}, {
    "time": "24시",
    "success": 131,
    "cancelBefore": 24,
    "cancelAfter": 0,
    "impossibility": 104,
}]



var dummyPassengerData = [{
    "time": "5시",
    "all": 44,
    "adult": 44,
    "youth": 0,
    "child": 0,
}, {
    "time": "6시",
    "all": 1224,
    "adult": 1220,
    "youth": 4,
    "child": 0,
}, {
    "time": "7시",
    "all": 2500,
    "adult": 2487,
    "youth": 13,
    "child": 0,
}, {
    "time": "8시",
    "all": 1290,
    "adult": 1280,
    "youth": 8,
    "child": 2,
}, {
    "time": "9시",
    "all": 141,
    "adult": 122,
    "youth": 10,
    "child": 9,
}, {
    "time": "10시",
    "all": 106,
    "adult": 87,
    "youth": 11,
    "child": 8,
}, {
    "time": "11시",
    "all": 158,
    "adult": 130,
    "youth": 18,
    "child": 10,
}, {
    "time": "12시",
    "all": 174,
    "adult": 136,
    "youth": 23,
    "child": 15,
}, {
    "time": "13시",
    "all": 189,
    "adult": 141,
    "youth": 35,
    "child": 13,
}, {
    "time": "14시",
    "all": 147,
    "adult": 111,
    "youth": 21,
    "child": 15,
}, {
    "time": "15시",
    "all": 227,
    "adult": 169,
    "youth": 32,
    "child": 26,
}, {
    "time": "16시",
    "all": 187,
    "adult": 137,
    "youth": 32,
    "child": 18,
}, {
    "time": "17시",
    "all": 449,
    "adult": 391,
    "youth": 23,
    "child": 35,
}, {
    "time": "18시",
    "all": 1154,
    "adult": 1105,
    "youth": 26,
    "child": 23,
}, {
    "time": "19시",
    "all": 856,
    "adult": 827,
    "youth": 16,
    "child": 13,
}, {
    "time": "20시",
    "all": 262,
    "adult": 213,
    "youth": 34,
    "child": 15,
}, {
    "time": "21시",
    "all": 190,
    "adult": 143,
    "youth": 32,
    "child": 15,
}, {
    "time": "22시",
    "all": 149,
    "adult": 119,
    "youth": 26,
    "child": 4,
}, {
    "time": "23시",
    "all": 73,
    "adult": 61,
    "youth": 9,
    "child": 3,
}]


var dummyDriveData2 = [
{
    "time": "5시",
    "success": 1,
    "cancelBefore": 2,
    "cancelAfter": 3,
    "impossibility": 4,
}, {
    "time": "6시",
    "success": 67,
    "cancelBefore": 2,
    "cancelAfter": 3,
    "impossibility": 4,
}, {
    "time": "7시",
    "success": 114,
    "cancelBefore": 2,
    "cancelAfter": 5,
    "impossibility": 6,
}, {
    "time": "8시",
    "success": 45,
    "cancelBefore": 1,
    "cancelAfter": 12,
    "impossibility": 13,
}, {
    "time": "9시",
    "success": 4,
    "cancelBefore": 5,
    "cancelAfter": 5,
    "impossibility": 25,
}, {
    "time": "10시",
    "success": 6,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 12,
}, {
    "time": "11시",
    "success": 7,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 4,
}, {
    "time": "12시",
    "success": 7,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 5,
}, {
    "time": "13시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "14시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "15시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "16시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "17시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "18시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "19시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "20시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "21시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "22시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}, {
    "time": "23시",
    "success": 0,
    "cancelBefore": 0,
    "cancelAfter": 0,
    "impossibility": 0,
}]



var dummyPassengerData2 = [
    {
    "time": "5시",
    "value" : 1
},{
    "time": "6시",
    "value" : 70
},{
    "time": "7시",
    "value" :119
},{
    "time": "8시",
    "value" : 57
},{
    "time": "9시",
    "value" : 4
},{
    "time": "10시",
    "value" : 5
},{
    "time": "11시",
    "value" : 6
},{
    "time": "12시",
    "value" : 7
},{
    "time": "13시",
    "value" : 5
},{
    "time": "14시",
    "value" : 6
},{
    "time": "15시",
    "value" : 0
},{
    "time": "16시",
    "value" : 0
},{
    "time": "17시",
    "value" : 0
},{
    "time": "18시",
    "value" : 0
},{
    "time": "19시",
    "value" : 0
},{
    "time": "20시",
    "value" : 0
},{
    "time": "21시",
    "value" : 0
},{
    "time": "22시",
    "value" : 0
},{
    "time": "23시",
    "value" : 0
}]


var dummyHistory = [
    { value: 240, category: "탑승성공" },
    { value: 26, category: "탑승전취소" },
    { value: 10, category: "미탑승취소" },
    { value: 75, category: "배치불가" }
]

var dummyCancel = [
    { value: 8, category: "개인사정" },
    { value: 8, category: "다른교통수단이용" },
    { value: 6, category: "승차시간부족" },
    { value: 4, category: "승차시간지연" }
]