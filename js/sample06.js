let list = [];
//連想
list['sun'] = "カレー"
list['mon'] = "ラーメン"
list['tuh'] = "焼肉"

list[0] = "カレー"
list[1] = "ラーメン"
list[2] = "焼肉"

//配列.foreach( () =>{ 繰り返す内容 })
list.forEach( (v,i) =>{
    console.log(`${i}番目の中身は${v}です`);
});



