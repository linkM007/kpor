// 添加动画样式
(function(){
    const s=document.createElement('style');
    s.textContent="@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.6}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}";
    document.head.appendChild(s);
})();

// 创建静态版本信息并显示在页脚
document.addEventListener('DOMContentLoaded',()=>{
    const e=document.createElement('p');
    e.className='text-gray-500 text-sm mt-1 text-center md:text-left';
    e.innerHTML='版本: <span class="text-green-500">已移除检查</span>';
    const f=document.querySelector('.footer p.text-gray-500.text-sm')||document.querySelector('.footer .container div');
    f&&f.appendChild(e);
});
