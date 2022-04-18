import React from "react";
import InputItemquanta from "./InputItemquanta";
import { useToast } from "@chakra-ui/react";

const InputValuequant = ({ qtinput, onDeleteq }) => {
  const toast = useToast();
  return (
    <>
      {qtinput.length === 1
        ? qtinput.map((quantInput) => {
            return (
              <>
                <InputItemquanta
                  quantInput={quantInput}
                  key={quantInput.sno}
                  onDeleteq={onDeleteq}
                />
              </>
            );
          })
        : ""}
    </>
  );
};

export default InputValuequant;
