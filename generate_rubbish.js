function generateRubbish(options) {
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
  };

  const phrase = ["很簡單", "很容易", "很合理", "很正常"];
  const jobs_translate = {
    engineer: "工程師",
    designer: "設計師",
    entrepreneur: "創業家"
  };

  let rubbish = "身為一個" + jobs_translate[options.jobs] + "，";

  // generate rubbish
  rubbish +=
    task[options.jobs][Math.floor(Math.random() * task[options.jobs].length)] +
    "，";
  rubbish += phrase[Math.floor(Math.random() * phrase.length)] + "！";

  return rubbish;
}

// export generateRubbish function for other files to use
module.exports = generateRubbish;
