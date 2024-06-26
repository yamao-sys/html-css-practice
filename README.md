# html-css-practice

## 対象のプロパティと算出基準となるサイズ
width...親要素のcontent-boxの横幅
height...親要素のcontent-boxの縦幅
margin・padding...親要素のcontent-boxの横幅(上下左右いずれも横幅を基準とする)
left・rigth...親要素のpadding-boxの横幅
top・bottom...親要素のpadding-boxの縦幅
font-size...親要素に指定・継承されたフォントサイズ

## CSSのクラス名の命名
BEM記法
https://qiita.com/yutaka_pg/items/229c260cd4099e1a2d9e

## スタイル当ての知識
https://zenn.dev/moneyforward/articles/075a74334ca512
- 要素間のスペースの制御は親要素に任せ、子要素ではそれぞれの固有のスタイルのみを指定する
	- → コンポーネント間の独立性が高まり、コンポーネントを組み合わせた時のデザイン崩れが起きにくくなる
	- こうしたレイアウト手法がStack
	- メリット
		- 可読性の向上
			- CSSの実装を確認せずとも、HTMLファイルからレイアウトの構造を確認できるようになる
		- デザインの意図の明確化
			- 「この要素は要素間にこの幅を取る」というビジュアルの意図を明確に伝えることができ、デザインの意図がより明確にコードに反映される
		- コンポーネント自体にmarginを書く必要がなくなるので、コンポーネントの独立性が高まります。（コンポーネントを組み合わせたときの崩れが起きにくくなります）
		- 人為的なミスが起こりにくくなる
			- 新しい要素を追加する際も、個別にmarginを指定する必要がないため、スペースの追加漏れが起こりにくくなる
		- スタイルの肥大化を防げる
			- 要素ごとに個別のmarginを指定する必要がなくなることで、スタイルの肥大化を防ぐことができる
## 詳細度
https://qiita.com/ryokkkke/items/ec1ca2baebe4a984f7a6

## box-sizing
widthとheightにpadding, borderを含めるかどうかの設定。
レスポンシブ対応で必須？な設定。
参考: https://zero-plus.io/media/box-sizing/

・content-box(デフォルト値): widthとheightにpadding, borderを含めず
・border-box: widthとheightにpadding, borderを含める
・inherit: 親要素の設定を受け継ぐ

同じwidthとheightに設定しても、content-boxとborder-boxとでは見え方が異なる。
特にSPで表示する際に顕著で、content-boxよりもborder-boxの方が膨張せずに見やすくなる。

## block/inline/inline-block
・要素に幅や高さを持たせられる(block)
・自動的に横並びにする(inline)
・親要素のtext-alignで中央寄せする(inline)

幅が未指定の時のデフォルト値
・inline...内容物のサイズに依存(幅指定無効)
・block...親要素の幅いっぱいまで広がる
・inline-block...内容物のサイズに依存(幅指定有効)

## flexbox
・flex-directionの方向を主軸、それと直角に交差する方向を交差軸という
・主軸方向の位置揃えはjustify-content, 交差軸の位置揃えはalign-itemsを使用する

・flexboxの小要素はマージンが相殺されず

## floatレイアウト
・横並びにしたブロックの高さの変更不可
・横並びにしたブロックは上揃えのみ
・少しでも幅の計算を間違えるとすぐにカラム落ちする
・float解除の仕組みがわかりづらい

これらの弱点があるものの、flexbox, gridでは実現不可な唯一のケースとして、
テキストの回り込みがある
