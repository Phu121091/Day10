let obj = {
    foo:{a:"Hello",b:"World"},
    bar:["example","mem",null,{xyz:6},88],
    qux:[4,8,12],
};

//c1
// obj.bar[3].xyz = 606;

//c2
obj[`bar`][3][`xyz`] = 606;

console.log(obj);