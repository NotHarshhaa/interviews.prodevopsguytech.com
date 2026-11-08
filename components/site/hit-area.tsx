/** Grows a small control's touch target to 48px without moving layout. */
function HitArea() {
  return (
    <span
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
    />
  )
}

export { HitArea }
