$(document).ready(function(){
  $('input').keypress(function(e) {
    if(e.which == 13) {

      var val = $("input:text").val();
      //var splitVal = val.toLowerCase().split("")
      var valUpperCase = val.toUpperCase();

      console.log(val);
      // $(".koreanOutput").text(val);
      translate(valUpperCase);
    }
    });
});

function translate(val) {
  var GOM = '<strong>'+ "곰" + '</strong>' + "[곰ː] 발음 듣기 " + "BEAR: [NOUN]" + '<br>' + "1. (Animal) A bear is a large, strong wild animal with thick fur and sharp claws." + '<br>' + '<br>' + "2. (동물) 포유강 식육목 곰과의 동물을 통틀어 이르는 말. 몸이 비대하며 다리가 굵고 짧다. 꼬리는 털에...";

  var BAE = '<strong>'+ "배" + '</strong>' + "[배ː] 발음 듣기 " + "STOMACH: [NOUN] | BOAT: [NOUN]" + '<br>' + "1.(body) stomach, belly, abdomen; tummy" + "배가 고프다" + "(vehicle)boat, ship, vessel";

  var NAMU = '<strong>'+ "나무" + '</strong>' + "[나무ː] 발음 듣기 " + "TREE: [NOUN]" + '<br>' + "1. (Plant) tree" + '<br>' + '<br>' + "2. 줄기나 가지가 목질로 된 여러해살이 식물.";

  var ANNYEONG = '<strong>'+ "안녕" + '</strong>' + "[안녕ː] 발음 듣기 " + "Hi, Hello: [NOUN]" + '<br>' + "1. greeting (public) peace; (안정) stability, well;" + '<br>' + '<br>' + "2. 아무 탈 없이 편안하다.";

  var GUNMUL = '<strong>'+ "건물" + '</strong>' + "[건물ː] 발음 듣기 " + "BUILDING: [NOUN]" + '<br>' + "1. building, structure; (거대한) (formal) edifice" + '<br>' + '<br>' + "2. 사람이 들어 살거나, 일을 하거나, 물건을 넣어 두기 위하여 지은 집을 통틀어 이르는 말.";

  var UMSIK = '<strong>'+ "음식" + '</strong>' + "[음식ː] 발음 듣기 " + "FOOD: [NOUN]" + '<br>' + "1. food" + '<br>' + '<br>' + "2. 사람이 먹을 수 있도록 만든, 밥이나 국 따위의 물건.";

  var BADA = '<strong>'+ "바다" + '</strong>' + "[바다ː] 발음 듣기 " + "OCEAN: [NOUN]" + '<br>' + "1. sea, ocean" + '<br>' + '<br>' + "2. <지리>지구 위에서 육지를 제외한 부분으로 짠물이 괴어 하나로 이어진 넓고 큰 부분. ...";

  switch (val) {
    case "GOM":
      $(".koreanOutput").text("곰")
      $(".korDef").html(GOM)
      $("koreanOutput").addClass("slideanim")
      $("hr").removeClass("hide")
      break;
    case "BAE":
      $(".koreanOutput").html("배")
      $(".korDef").html(BAE)
      $("hr").removeClass("hide")
      break;
    case "NAMU":
      $(".koreanOutput").html("나무")
      $(".korDef").html(NAMU)
      $("hr").removeClass("hide")
      break;
    case "ANNYEONG":
      $(".koreanOutput").html("안녕")
      $(".korDef").html(ANNYEONG)
      $("hr").removeClass("hide")
      break;
    case "GUNMUL":
      $(".koreanOutput").html("건물")
      $(".korDef").html(GUNMUL)
      $("hr").removeClass("hide")
      break;
    case "UMSIK":
      $(".koreanOutput").html("음식")
      $(".korDef").html(UMSIK)
      $("hr").removeClass("hide")
      break;
    case "BADA":
      $(".koreanOutput").html("바다")
      $(".korDef").html(BADA)
      $("hr").removeClass("hide")
      break;

      //Japanese Characters
    case "ゴム":
      $(".koreanOutput").html("곰")
      $(".korDef").html(GOM)
      $("hr").removeClass("hide")
      break;
    case "べー":
      $(".koreanOutput").html("배")
      $(".korDef").html(BAE)
      $("hr").removeClass("hide")
      break;
    case "ナム":
      $(".koreanOutput").html("나무")
      $(".korDef").html(NAMU)
      $("hr").removeClass("hide")
      break;
    case "アンニョン":
      $(".koreanOutput").html("안녕")
      $(".korDef").html(ANNYEONG)
      $("hr").removeClass("hide")
      break;
    case "グンムル":
      $(".koreanOutput").html("건물")
      $(".korDef").html(GUNMUL)
      $("hr").removeClass("hide")
      break;
    case "ウンシク":
      $(".koreanOutput").html("음식")
      $(".korDef").html(UMSIK)
      $("hr").removeClass("hide")
      break;
    case "バーダー":
      $(".koreanOutput").html("바다")
      $(".korDef").html(BADA)
      $("hr").removeClass("hide")
      break;
             }

  /*
  switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        code block
}
  */
}
