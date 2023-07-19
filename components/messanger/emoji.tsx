import React from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useSetRecoilState } from 'recoil'
import { messageContentState, messageContentType } from '@/atom/messageState'

type Props = {}

const Emoji = (props: Props) => {
  const setMessage = useSetRecoilState<messageContentType>(messageContentState)
  const addEmoji = (e : any) => {
    setMessage((prev) => ({
      ...prev,
      content : prev.content + e.native
    }))
  }
  return (
    <Picker data={data} onEmojiSelect={addEmoji} theme="dark" navPosition="none" emojiButtonSize={24} emojiSize={16} size={20} previewEmoji={"point_up"} maxFrequentRows={0} />
  )

}

export default Emoji