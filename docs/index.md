# 欢迎来到 Siron 的游戏开发笔记

这里记录我的学习轨迹、踩坑经验和项目总结。

希望能帮助到点开网站的你。

---

《沐雨》

<div class="lyrics-container">
  <div class="lyrics-column">
    听着那一缕一缕淅沥沥<br>
    数着那一颗一颗滴答滴<br>
    走进烟雨披上一件外衣<br>
    看来我和老天一样正需要梳洗
    <br><br>
    镜片结出了珍珠<br>
    淋湿头发披散得像在水墨画里<br>
    踏着雨滴的节奏<br>
    让那纷扰的愁绪被春风吹皱<br>
    化作春泥
  </div>

  <div class="lyrics-column">
    我的生活好像总是下着雨<br>
    一片灰白色望不到边际<br>
    可是雨后总会有彩虹<br>
    草会更翠绿花儿会更艳丽
    <br><br>
    我就像那半空中一丝细雨<br>
    被风牵引着总身不由己<br>
    可是雨后总有太阳<br>
    使我云般自由或露珠般剔透晶莹
  </div>

  <div class="lyrics-column">
    织起那一缕一缕淅沥沥<br>
    串起那一颗一颗滴答滴<br>
    料峭春风吹透湿漉身体<br>
    远处云褪去的地方斜阳正相迎
    <br><br>
    小水洼儿圈涟漪<br>
    一层一层就像年轮无声地老去<br>
    倒映着初霁的虹<br>
    和着沁鼻的泥香起伏的鸟鸣<br>
    我还年轻
  </div>

  <div class="lyrics-column">
    我的生活好像总是下着雨<br>
    一片灰白色望不到边际<br>
    可是雨后总会有彩虹<br>
    草会更翠绿花儿会更艳丽
    <br><br>
    我就像那半空中一丝细雨<br>
    被风牵引着总身不由己<br>
    可是雨后总有太阳<br>
    使我云般自由或露珠般剔透晶莹<br>
    看云销雨霁明天又是焕然一新
  </div>
</div>

<style>
/* 这里的 CSS 负责排版和手机端适配 */
.lyrics-container {
  display: flex;
  gap: 30px; /* 列之间的间距 */
  flex-wrap: wrap; /* 如果屏幕太窄，自动换行 */
  margin-top: 20px;
}

.lyrics-column {
  flex: 1; /* 每列平分空间 */
  min-width: 200px; /* 保证在手机上不会挤在一起 */
  line-height: 1.8; /* 行距，让阅读更舒服 */
  color: var(--vp-c-text-2); /* 使用 VitePress 默认的次要文本颜色，适配暗黑模式 */
}
</style>