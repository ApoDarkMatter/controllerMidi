import { useState } from "react"
import { useMIDIContext } from "react-midi-context/hooks"

export const SendCCRange = () => {
    const sendMIDICC = useMIDIContext((cv) => cv.sendMIDICC)
    const midiOutputs = useMIDIContext((cv) => cv.midiOutputs)
    const device = Object.values(midiOutputs)[0]
    const [value, setValue] = useState(0)
    const [reverb, setReverb] = useState(false)
    const [chorus, setChorus] = useState(false)
    const [delay, setDelay] = useState(false)

    const activateReverb = () => {
        if(reverb) {
            sendMIDICC({ channel: 4, cc: 4, value: 0, device })
            setReverb(false)
        } else {
            sendMIDICC({ channel: 4, cc: 4, value: 127, device })
            setReverb(true)
        }
    }
    const activateChorus = () => {
        if(chorus) {
            sendMIDICC({ channel: 4, cc: 5, value: 0, device })
            setChorus(false)
        } else {
            sendMIDICC({ channel: 4, cc: 5, value: 127, device })
            setChorus(true)
        }
    }
    const activateDelay = () => {
        if(delay) {
            sendMIDICC({ channel: 4, cc: 6, value: 0, device })
            setDelay(false)
        } else {
            sendMIDICC({ channel: 4, cc: 6, value: 127, device })
            setDelay(true)
        }
    }

    return (
        <>
            <label style={{ display: 'flex', flexFlow: 'column', width: 'max-content', maxWidth: '100%' }}>
                <br />
                Current value: {value}
                <input
                    type="range"
                    min="0"
                    max="127"
                    value={value}
                    onChange={(e) => {
                    sendMIDICC({ channel: 4, cc: 6, value: parseInt(e.currentTarget.value), device })
                    setValue(parseInt(e.currentTarget.value))
                    }}
                />
            </label>
            <button onClick={activateReverb}>Activate Reverb</button>
            <button onClick={activateChorus}>Activate Chorus</button>
            <button onClick={activateDelay}>Activate Delay</button>
        </>
    )
  }