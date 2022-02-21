// 모달 모드일 때 스크롤 제어하는 함수
export function setScrollDisabled(isToggle) {
    if (isToggle) document.body.style.overflow = 'hidden';
    if (!isToggle) document.body.style.overflow = 'unset';
}
