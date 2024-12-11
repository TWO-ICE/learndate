"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4470],{1021:(e,i)=>{i.A=(e,i)=>{const a=e.__vccOpts||e;for(const[e,s]of i)a[e]=s;return a}},9134:(e,i,a)=>{a.r(i),a.d(i,{comp:()=>n,data:()=>l});var s=a(6254);const t={},n=(0,a(1021).A)(t,[["render",function(e,i){return(0,s.uX)(),(0,s.CE)("div",null,i[0]||(i[0]=[(0,s.Fv)('<blockquote><p>开源工具、效率方法、心理学探索的自我提升笔记</p></blockquote><figure><a href="https://discord.gg/PZTQfJ4GjX" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&amp;label=Discord&amp;logo=discord&amp;style=for-the-badge" alt="" tabindex="0" loading="lazy"></a><figcaption></figcaption></figure><h2 id="✨-初衷" tabindex="-1"><a class="header-anchor" href="#✨-初衷"><span>✨ 初衷</span></a></h2><p>曾经，我采用了 Notion、Obsidian 和 飞书 等多款知识管理工具来存储我的心得与笔记。然而，这种方式导致我的资料分散，难以管理和分享。</p><p>更重要的是，<strong>笔记里的知识并不属于你，只有经过消化、应用，才会成为我们的财富。</strong></p><p>为此，我基于 VuePress 和 vuepress-theme-hope 构建了 LearnData 开源笔记，将我所有的笔记与文章聚合到同一页面形成知识库，便于集中管理和分享。</p><figure><img src="https://img.newzone.top/2022-08-22-19-28-25.png?imageMogr2/thumbnail/600x" alt="" tabindex="0" loading="lazy"><figcaption>笔记 + 文章 = LearnData 知识库</figcaption></figure><figure><img src="https://img.newzone.top/2022-08-24-19-14-59.png" alt="" tabindex="0" loading="lazy"><figcaption>笔记/博客自动化发布</figcaption></figure><h2 id="🧱-笔记结构" tabindex="-1"><a class="header-anchor" href="#🧱-笔记结构"><span>🧱 笔记结构</span></a></h2><ul><li>置顶：日常习惯、健身、阅读；</li><li>软件应用：常用应用、Chrome 扩展和相关教程；</li><li>Docker 服务：NAS 和服务器上的后端应用，以 Docker 容器为主；</li><li>系统问题：Windows 系统优化和相关问题；</li><li>代码编程：常用代码的学习和使用笔记，页面开发攻略和网站相关的工具和知识收集；</li><li>生活角落：说明书、生活记录和小技巧；</li><li>博客汇总：聚合所有博客文章，以分类、标签、时间轴等方式进行组合。</li></ul><h2 id="🍥-搭建-learndata" tabindex="-1"><a class="header-anchor" href="#🍥-搭建-learndata"><span>🍥 搭建 LearnData</span></a></h2><ol><li><p>首先，访问 <a href="https://github.com/rockbenben/LearnData" target="_blank" rel="noopener noreferrer">LearnData 项目页面</a>，然后点击页面右上角的「Use this template」按钮。在弹出的页面中选择「Create a new repository」以创建一个基于此模板的新仓库。</p><figure><img src="https://img.newzone.top/2022-08-10-19-32-05.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://img.newzone.top/2022-08-10-19-34-13.png?imageMogr2/thumbnail/500x" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>进入你的项目仓库，点击「Settings」&gt;「Actions」&gt;「General」，找到页面底部的 <code>Workflow permissions</code> 设置。选中 <code>Read and write permissions</code> 选项，并点击保存。这一步骤是确保 GitHub Page 在部署时能够正确访问和修改你的仓库内容，避免因权限不足导致部署失败（报错 <code>failed with exit code 128</code>）。</p><figure><img src="https://img.newzone.top/2023-03-14-04-02-16.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>然后，请进入菜单栏顶部的「Actions」页签，选择最新的 workflow。在页面右上方点击「Re-run jobs」&gt;「Re-run all jobs」，这样做可以触发 GitHub 自动重新生成并部署网页。如果设置无误，GitHub 会自动创建一个名为 gh-page 的分支，并在其中部署你的页面。</p><figure><img src="https://img.newzone.top/2023-03-14-04-04-52.gif?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>接下来，返回「Settings」页面，修改 <code>Repository name</code> 为 <code>你的用户名.github.io</code>。例如，如果你的仓库链接是 <code>https://github.com/xxx/LearnData</code>，那么 <code>xxx</code> 就是你的 GitHub 用户名。若该名称已被其他项目使用，系统会显示红色错误提示。此时，你可以选择任意其他名称，例如 LearnData，部署页面路径将变为 <code>你的用户名.github.io/LearnData</code>。如果页面样式显示不正常，可能需要设置子域名，具体方法可以参考页面底部的<a href="#%E7%BD%91%E9%A1%B5%E6%98%BE%E7%A4%BA%E5%BC%82%E5%B8%B8">常见问题 - 网页显示异常</a>。</p><figure><img src="https://img.newzone.top/20180505202201.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>在「Settings」&gt;「Pages」&gt;「Build and deployment」&gt;「Branch」中，将 gh-page 分支设置为 GitHub Pages 的源。大部分情况下，网站运行目录保持默认的 <code>/(root)</code> 即可。完成设置后，不要忘记点击「Save」保存。如果在此步骤中未找到 gh-pages 分支，请回到第三步重新触发一次 workflow，或尝试修改仓库中的任意文件以手动启动 GitHub Action。</p><figure><img src="https://img.newzone.top/2022-08-10-19-39-15.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>设置完成后，稍等几分钟再刷新页面，你将看到一个新的访问链接提示：<code>https://你的用户名.github.io/</code>。此时，你的个人知识库已经成功搭建，并且可以通过此链接访问了。</p></li></ol><h2 id="🔣-配置-learndata" tabindex="-1"><a class="header-anchor" href="#🔣-配置-learndata"><span>🔣 配置 LearnData</span></a></h2><h3 id="文档结构" tabindex="-1"><a class="header-anchor" href="#文档结构"><span>文档结构</span></a></h3><p>LearnData 网站的配置和文本都存放在 <code>docs</code> 文件夹中。文章和页面的配置可参考主目录下的 <a href="https://github.com/rockbenben/LearnData/blob/main/samplepage.md?plain=1" target="_blank" rel="noopener noreferrer">samplepage.md</a>。其中，<code>order</code> 参数表示侧边栏的顺序，数字越小越靠前，支持非整数和负数。我个人的偏好是将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。这种设置使我能随时记录低于 1000 字的短文，同时不会影响那些寻求干货文章的用户体验，因为干货文章的排序始终保持在最上方。</p><p>docs 目录结构如下：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docs</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .vuepress</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">               # 网站配置</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config.ts</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">           # 网站环境依赖和网站属性</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sidebar.ts</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 侧边栏</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> navbar.ts</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">           # 导航栏</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> theme.ts</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            # 主题和插件</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> templateBuild.html</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 网页模板，网站关键词和统计</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> _posts</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  # 博客文章目录</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> _temp</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                   # 草稿箱</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reading</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                 # 读书笔记</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> anyname</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                 # 自定义笔记</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> blog.md</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                 # 博客页面</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> intro.md</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                # 博主个人介绍</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docs/.vuepress</code> 路径下是网站的配置文件，我已添加了详细的注释。你可以参考注释和 <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress" target="_blank" rel="noopener noreferrer">vuepress-theme-hope 配置案例</a>来调整配置。请在 <code>docs/.vuepress/sidebar.ts</code> 文件中修改文件夹路径，后台会自动抓取路径下的 md 文件来生成侧边栏。<code>docs/.vuepress/theme.ts</code> 有<a href="https://newzone.top/web/Comments.html" target="_blank" rel="noopener noreferrer">评论插件</a>的相关配置。</p><p>注意：</p><ul><li>LearnData 默认采用 algolia 进行全文检索。如果你没用 algolia，可在 <code>docs/.vuepress/theme.ts</code> 文件的 plugins 部分删除 docsearch 区块，并激活 searchPro。这样，网站将转用本地全文索引来进行搜索。</li><li><code>docs/_temp</code> 文件夹默认不同步到 GitHub 上。你可以手动在本地建立 <code>_temp</code> 文件夹，用来存放草稿。</li><li>自 VuePress2 的 beta.54 版本开始，文件夹名前缀为 <code>_</code> 在生成链接时将被省略，例如文章路径为 <code>/_posts/</code>，但网页链接路径会是 <code>/posts/</code>。</li></ul><h3 id="看板娘" tabindex="-1"><a class="header-anchor" href="#看板娘"><span>看板娘</span></a></h3><p>LearnData 集成了看板娘 <a href="https://github.com/stevenjoezhang/live2d-widget" target="_blank" rel="noopener noreferrer">Live2D Widget</a>，支持随机对话、切换人物服饰和玩打飞机游戏，能提升网站美观度和趣味性。如果不需要看板娘，可删除 <code>docs\\.vuepress\\public</code> 下的 live2d-widget 文件夹。</p><p>如果网站部署在子页面（例如 <code>https://xxx.github.io/yyy</code>），则需要将子页面路径 yyy 加入到以下两个文件：</p><ul><li>将 <code>docs\\.vuepress\\public\\live2d-widget\\autoload.js</code> 文件第三行的 <code>const live2d_path = &quot;/live2d-widget/&quot;</code> 修改为 <code>const live2d_path = &quot;/yyy/live2d-widget/&quot;</code>。</li><li>将 <code>docs\\.vuepress\\templateBuild.html</code> 文件中看板娘区块代码 <code>&lt;script src=&quot;/live2d-widget/autoload.js&quot;&gt;</code> 修改为 <code>&lt;script src=&quot;/yyy/live2d-widget/autoload.js&quot;&gt;</code>。</li></ul><p>如需调整看板娘模型，请参照 <code>docs\\.vuepress\\public\\live2d-widget</code> 目录下的 README 和修改说明。若在服务器上自建 <a href="https://github.com/fghrsh/live2d_api" target="_blank" rel="noopener noreferrer">live2d api</a>，请注意添加跨域配置，以避免仅显示文本而没有看板娘图片的情况。或者，可以使用我提供的看板娘 CDN，修改 <code>docs\\.vuepress\\public\\live2d-widget\\autoload.js</code> 中 initWidget 的 cdnPath，将 <code>cdnPath: live2d_path + &quot;live2d_api/&quot;</code> 更改为 <code>cdnPath: &quot;https://live2d-api.aishort.top/&quot;</code>。</p><h3 id="读书笔记" tabindex="-1"><a class="header-anchor" href="#读书笔记"><span>读书笔记</span></a></h3><p>读书笔记中可能会有大量的原文引用，这与 LearnData 精简化知识点的初衷并不相符。因此，我们使用 docsify 来构建读书笔记，并将其放置于 <code>docs/reading</code> 目录下。在生成静态页面后，该路径下的文件不会被转换为 HTML 文件，而是将被自动复制到静态网站下，完成 docsify 页面构建和独立的读书笔记搜索索引。</p><p>由于读书笔记架构更换到 docsify，不能使用相对链接。请调整 <code>docs\\.vuepress\\sidebar.ts</code> 的 <code>{ text: &quot;读书笔记&quot;, icon: &quot;read&quot;, link: &quot;https://newzone.top/reading/&quot; }</code>，将 <code>newzone.top</code> 替换为你的博客域名。</p><p>如果你没有部署 Waline，或不需统计阅读量和评论功能，可移除 <code>docs\\reading\\index.html</code> 中的 Waline 代码块。</p><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" data-title="typescript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">waline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">   serverURL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://waline.newzone.top&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">   ...</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地图片引用" tabindex="-1"><a class="header-anchor" href="#本地图片引用"><span>本地图片引用</span></a></h3><p>为了避免在生成静态页面时出现 <code>Rollup failed to resolve import</code> 错误，本地图片必须保存在 <code>docs/.vuepress/public</code> 路径下。如果图片名称为 <code>1.png</code>，保存在 <code>docs/.vuepress/public/imgs</code> 路径下，则可以使用以下链接来引用该图片：<code>/imgs/1.png</code> 或使用 Markdown 图片链接：<code>![](/imgs/1.png)</code>。本方法也适用于将附件部署到网站上。</p><h2 id="🖥️-网站部署" tabindex="-1"><a class="header-anchor" href="#🖥️-网站部署"><span>🖥️ 网站部署</span></a></h2><p>在将 LearnData 推送到 GitHub 后，会自动生成可访问的网页。但由于国内访问 GitHub Pages 的速度不稳定，为了确保网站能够正常访问，建议增加国内的访问节点。</p><p>很多人选择使用 Gitee Pages 作为国内节点，通过 GitHub Actions 将新文档同步到 Gitee 上，从而生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 有很多限制，例如必须实名认证、免费版无法自定义域名，近期也发生过下架风波。因此，我没有选择 Gitee，而是将文档同步到国内服务器（域名需要备案）或 Vercel（国外服务可能会出现断网）。</p><h3 id="同步到服务器" tabindex="-1"><a class="header-anchor" href="#同步到服务器"><span>同步到服务器</span></a></h3><p>如果你的项目已经搭建好，但出现了红色的叉叉提示，这可能是 GitHub Actions 同步到服务器时发生了错误。你需要进入项目仓库的「Setting」&gt;「Secrets and variables」&gt;「Action」，并添加 <code>FTP_HOST</code>、<code>FTP_PORT</code>、<code>FTP_USERNAME</code> 和 <code>FTP_PASSWORD</code> 的密钥。之后，每当文件发生变化时，GitHub Actions 就会将修改推送到服务器的 FTP 上。</p><p>你也可以参考文章 <a href="https://newzone.top/deploy/Static.html#%E5%90%8C%E6%AD%A5%E5%88%B0-oss" target="_blank" rel="noopener noreferrer">GitHub 同步到 OSS</a>，将网页部署到云存储上。</p><h3 id="部署到-vercel" tabindex="-1"><a class="header-anchor" href="#部署到-vercel"><span>部署到 Vercel</span></a></h3><p>Vercel 的速度相对 GitHub Pages 更快，但 <code>*.vercel.app</code> 域名已受 DNS 污染影响。为保证国内用户访问稳定，需绑定自定义域名。</p><p>Vercel 部署步骤如下：</p><ol><li><p>点击 <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2FLearnData%2Ftree%2Fgh-pages" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel" loading="lazy"></a> 或将 <code>https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages</code> 中的 <code>rockbenben/LearnData</code> 改为 <code>你的用户名/仓库名</code>，然后会跳转至 Vercel 进行网页部署。如果你未登录，Vercel 提示你注册或登录，建议使用 GitHub 账户进行快捷登录。</p></li><li><p>输入任意 Vercel 项目名称，默认 private 即可，然后点击 <code>Create</code>。</p><figure><img src="https://img.newzone.top/2022-08-24-17-24-16.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>创建 Vercel 项目</figcaption></figure></li><li><p>接着，Vercel 会基于 LearnData 模板帮助你新建并初始化仓库。几十秒后，满屏的烟花会庆祝你部署成功。此时，点击 <code>Go to Dashboard</code> 跳转到应用的控制台。</p><figure><img src="https://img.newzone.top/2022-08-24-17-21-58.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>Vercel 部署成功提示</figcaption></figure></li><li><p>当前的 Vercel 页面仅用于演示，并不会随项目自动更新。请依次选择「Project Settings」&gt;「Git」&gt;「Connected Git Repository」，点击「Disconnect」，然后点击 GitHub 图标，选择第一步中的「你的用户名/仓库名」，并点击其右侧的「Connect」按钮。</p><figure><img src="https://img.newzone.top/2024-08-22-14-05-07.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>移除演示项目</figcaption></figure><figure><img src="https://img.newzone.top/2024-08-22-14-07-13.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>链接同步项目</figcaption></figure></li><li><p>在「Production Branch」中，将分支名从 main 改为 <code>gh-pages</code>。保存设置后，页面将随项目同步更新。</p><figure><img src="https://img.newzone.top/2024-08-22-14-09-31.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>切换 Vercel 分支</figcaption></figure></li></ol><p>如果部署过程中遇到错误，请检查 Vercel 项目设置中的 <code>Node.js Version</code> 是否设置为 <code>20.x</code>。</p><h2 id="🤔-常见问题" tabindex="-1"><a class="header-anchor" href="#🤔-常见问题"><span>🤔 常见问题</span></a></h2><h3 id="网页显示异常" tabindex="-1"><a class="header-anchor" href="#网页显示异常"><span>网页显示异常</span></a></h3><p>如果你的网站仅显示文本而不正常加载样式和脚本，可能是因为网站路径设置错误。这通常发生在将仓库作为子路径部署时，例如 <code>https://xxx.github.io/LearnData/</code>。</p><figure><img src="https://img.newzone.top/2023-03-14-06-11-10.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>解决步骤如下：</p><ol><li><p><strong>找到配置文件</strong>：在你的项目中，打开 <code>docs/.vuepress/config.ts</code>。</p></li><li><p><strong>修改 <code>base</code> 设置</strong>：将 <code>base</code> 配置项的值更改为你的子路径 <code>/LearnData/</code>。</p><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" data-title="typescript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  base</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;/LearnData/&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 其他配置...</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>提交并推送更改。等待 GitHub Actions 自动重新部署网站。</p></li><li><p>部署后，刷新网站应能正常显示。</p></li></ol><p>通过正确配置 <code>base</code> 路径，你的网站将能够加载所有必要的资源文件，从而正确显示样式和功能。如果你的网站是部署在根路径（如 <code>https://xxx.github.io/</code>），那么 <code>base</code> 应保留默认值 <code>/</code>。</p><h3 id="同步服务器报错" tabindex="-1"><a class="header-anchor" href="#同步服务器报错"><span>同步服务器报错</span></a></h3><ul><li><p><code>Error: Input required and not supplied: server</code> 表示服务器配置错误，请按照上方的网站部署步骤检查配置。如果你不需要将<strong>网页部署同步到服务器</strong>，可以删除 <code>.github/workflows/main.yml</code> 中 Sync files 区块的代码。</p></li><li><p><code>FTPError: 530 Login authentication failed</code> 指 FTP 密码错误或账号不存在，可使用 FileZilla 来测试 FTP 的有效性。</p></li><li><p><code>Error: Timeout (control socket)</code> 指同步服务器出现超时报错。如果出现该错误，可以进入 Actions 页面，点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭服务器防火墙，检查 GitHub 服务器 IP 是否屏蔽了。</p></li></ul><h3 id="get-counter-failed-with-403" tabindex="-1"><a class="header-anchor" href="#get-counter-failed-with-403"><span>Get counter failed with 403</span></a></h3><p><code>Get counter failed with 403</code> 错误仅在本地运行 <code>pnpm docs:dev</code> 时使用<strong>非 localhost 域名</strong>会发生，静态构建过程中不会出现。这是由评论插件 Waline 引起的。要解决这个问题，只需在 <code>docs/.vuepress/theme.ts</code> 文件中的 plugins 部分删除 Waline 配置。</p><figure><img src="https://img.newzone.top/2024-02-23-21-07-05.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="err-module" tabindex="-1"><a class="header-anchor" href="#err-module"><span>ERR_MODULE</span></a></h3><p>如果出现 <code>Error [ERR_MODULE_NOT_FOUND]: Cannot find module</code> 的报错，可能是第三方插件或 pacakge.json 环境依赖未正确配置。此报错出现的几率极低，如果遇到，可以使用最新版本的 <code>package.json</code> 和 <code>pnpm-lock.yaml</code> 来覆盖本地设置，或者删除主目录下的 <code>.npmrc</code> 文件。</p><h3 id="本地运行-learndata" tabindex="-1"><a class="header-anchor" href="#本地运行-learndata"><span>本地运行 LearnData</span></a></h3><ol><li>为了本地运行，你需要安装 npm 和 pnpm 环境，可参考<a href="https://newzone.top/deploy/vps/#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2" target="_blank" rel="noopener noreferrer">环境部署教程</a>。</li><li>将 LearnData 项目下载到本地后，在项目目录下打开终端，输入命令 <code>pnpm i</code> 安装依赖。</li><li>在终端中输入命令 <code>pnpm docs:dev</code>，若成功则会提示访问链接，默认为 <code>http://localhost:8080/</code>。</li></ol><p>本地服务运行后，修改文件时页面会同步更新预览。若需停止本地服务器，可在终端中按下 <code>Ctrl + C</code>。</p><p>如果你想深入了解 LearnData 的高级技巧，请浏览 <a href="https://newzone.top/posts/2024-01-28-learndata-advanced.html" target="_blank" rel="noopener noreferrer">LearnData 博客：高效知识管理和进阶应用技巧</a>。</p>',61)]))}]]),l=JSON.parse('{"path":"/","title":"LearnData 开源笔记","lang":"zh-CN","frontmatter":{"article":false,"title":"LearnData 开源笔记","icon":"fa6-solid:book-open-reader","description":"开源工具、效率方法、心理学探索的自我提升笔记 ✨ 初衷 曾经，我采用了 Notion、Obsidian 和 飞书 等多款知识管理工具来存储我的心得与笔记。然而，这种方式导致我的资料分散，难以管理和分享。 更重要的是，笔记里的知识并不属于你，只有经过消化、应用，才会成为我们的财富。 为此，我基于 VuePress 和 vuepress-theme-hop...","head":[["meta",{"property":"og:url","content":"https://newzone.top/"}],["meta",{"property":"og:site_name","content":"LearnData 开源笔记"}],["meta",{"property":"og:title","content":"LearnData 开源笔记"}],["meta",{"property":"og:description","content":"开源工具、效率方法、心理学探索的自我提升笔记 ✨ 初衷 曾经，我采用了 Notion、Obsidian 和 飞书 等多款知识管理工具来存储我的心得与笔记。然而，这种方式导致我的资料分散，难以管理和分享。 更重要的是，笔记里的知识并不属于你，只有经过消化、应用，才会成为我们的财富。 为此，我基于 VuePress 和 vuepress-theme-hop..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&label=Discord&logo=discord&style=for-the-badge"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-11T06:19:19.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-11T06:19:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"LearnData 开源笔记\\",\\"description\\":\\"开源工具、效率方法、心理学探索的自我提升笔记 ✨ 初衷 曾经，我采用了 Notion、Obsidian 和 飞书 等多款知识管理工具来存储我的心得与笔记。然而，这种方式导致我的资料分散，难以管理和分享。 更重要的是，笔记里的知识并不属于你，只有经过消化、应用，才会成为我们的财富。 为此，我基于 VuePress 和 vuepress-theme-hop...\\"}"]]},"headers":[{"level":2,"title":"✨ 初衷","slug":"✨-初衷","link":"#✨-初衷","children":[]},{"level":2,"title":"🧱 笔记结构","slug":"🧱-笔记结构","link":"#🧱-笔记结构","children":[]},{"level":2,"title":"🍥 搭建 LearnData","slug":"🍥-搭建-learndata","link":"#🍥-搭建-learndata","children":[]},{"level":2,"title":"🔣 配置 LearnData","slug":"🔣-配置-learndata","link":"#🔣-配置-learndata","children":[{"level":3,"title":"文档结构","slug":"文档结构","link":"#文档结构","children":[]},{"level":3,"title":"看板娘","slug":"看板娘","link":"#看板娘","children":[]},{"level":3,"title":"读书笔记","slug":"读书笔记","link":"#读书笔记","children":[]},{"level":3,"title":"本地图片引用","slug":"本地图片引用","link":"#本地图片引用","children":[]}]},{"level":2,"title":"🖥️ 网站部署","slug":"🖥️-网站部署","link":"#🖥️-网站部署","children":[{"level":3,"title":"同步到服务器","slug":"同步到服务器","link":"#同步到服务器","children":[]},{"level":3,"title":"部署到 Vercel","slug":"部署到-vercel","link":"#部署到-vercel","children":[]}]},{"level":2,"title":"🤔 常见问题","slug":"🤔-常见问题","link":"#🤔-常见问题","children":[{"level":3,"title":"网页显示异常","slug":"网页显示异常","link":"#网页显示异常","children":[]},{"level":3,"title":"同步服务器报错","slug":"同步服务器报错","link":"#同步服务器报错","children":[]},{"level":3,"title":"Get counter failed with 403","slug":"get-counter-failed-with-403","link":"#get-counter-failed-with-403","children":[]},{"level":3,"title":"ERR_MODULE","slug":"err-module","link":"#err-module","children":[]},{"level":3,"title":"本地运行 LearnData","slug":"本地运行-learndata","link":"#本地运行-learndata","children":[]}]}],"git":{"createdTime":1733897959000,"updatedTime":1733897959000,"contributors":[{"name":"TWO-ICE","username":"TWO-ICE","email":"115453069+TWO-ICE@users.noreply.github.com","commits":1,"url":"https://github.com/TWO-ICE"}]},"readingTime":{"minutes":11.51,"words":3453},"filePathRelative":"README.md","localizedDate":"2024年12月11日","excerpt":"<blockquote>\\n<p>开源工具、效率方法、心理学探索的自我提升笔记</p>\\n</blockquote>\\n<figure><a href=\\"https://discord.gg/PZTQfJ4GjX\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&amp;label=Discord&amp;logo=discord&amp;style=for-the-badge\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"></a><figcaption></figcaption></figure>","autoDesc":true}')}}]);