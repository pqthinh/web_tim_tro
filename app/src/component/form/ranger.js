/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { useRanger } from "react-ranger";

export default function Ranger({}) {
    // alert(value)
    const [values, setValues] = useState([0, 100]);
    // handleCost(values)
    const { getTrackProps, handles } = useRanger({
        min: 0,
        max: 100,
        stepSize: 2,
        values,
        onChange: setValues,
        
    });

    return (
        <div>
        <div
            {...getTrackProps({
            style: {
                height: "4px",
                background: "#ddd",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
                borderRadius: "2px"
            }
            })}
        >
            {handles.map(({ getHandleProps }) => (
            <button
                {...getHandleProps({
                style: {
                    width: "14px",
                    height: "14px",
                    outline: "none",
                    borderRadius: "100%",
                    background: "linear-gradient( #11998e 45%, #38ef7d 55%)",
                    border: "solid 1px #2ECC71"
                }
                })}
            />
            ))}
        </div>
        {/* {setCost(values)} */}
        <pre
            style={{
            display: "inline-block",
            textAlign: "left"
            }}
        >
            <code>
            {JSON.stringify({
                values
            })}
            </code>
        </pre>
        </div>
    );
}