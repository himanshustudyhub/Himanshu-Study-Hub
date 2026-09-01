function toggleMenu(){document.getElementById('navlinks').classList.toggle('show')}
function showMessage(name){alert(name + ' का section तैयार है। अपनी PDF/link जोड़ने के लिए HTML में इस card को edit करें।')}
function answer(btn, correct){
  const buttons=document.querySelectorAll('#answers button');
  buttons.forEach(b=>b.disabled=true);
  if(correct){btn.classList.add('correct');document.getElementById('result').textContent='✅ सही जवाब! बहुत बढ़िया।'}
  else{btn.classList.add('wrong');document.getElementById('result').textContent='❌ गलत जवाब। सही उत्तर: नई दिल्ली';}
}
function resetQuiz(){location.reload()}
