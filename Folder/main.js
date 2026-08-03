console.log('Hello World!');
// あなたが送ってくれた正しい形式のURLです
const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT42oPK-MjT8PfdUX0j5yANyA149RrlXo1eQaiQH1Dv3xynLxHONB-0XTnczUfrCDivuRSj_KBk7oYP/pub?gid=0&single=true&output=csv';

async function loadA1Content() {
    try {
        const response = await fetch(csvUrl);
        const data = await response.text();
        
        // CSVの最初の1マス(A1)を抽出
        // セル内改行がある場合、CSV上では全体が " " で囲まれるのでそれを取り除きます
        let content = data.split(',')[0].replace(/^"|"$/g, '');

        // スプレッドシート内の改行コードをHTMLの改行タグに変換
        content = content.replace(/\n/g, '<br>');

        // 画面に表示
        document.getElementById('display-area').innerHTML = content;
    } catch (error) {
        document.getElementById('display-area').textContent = 'エラー：データの取得に失敗しました。';
        console.error('読み込みエラー:', error);
    }
}

// ページを読み込んだ時に実行
loadA1Content();

