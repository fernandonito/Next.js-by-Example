import ShareLinkButton from './ShareLinkButton'

export default function ShareButtons() {
  console.log('[ShareButtons] rendering')
  return (
    <div className="flex gap-3 items-baseline">
      <ShareLinkButton /> | [Twitter] | [Facebook]
    </div>
  )
}
