"use client";
import { submitQuestionaire } from "@/actions/idea/actions";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import MainButton from "../Button/MainButton";
import Input from "../InputField/ideaInput";
import { AuthErrorResponse } from "../Login/Form";
import { CountryDropdown } from "../ui/country-dropdown";
import { PhoneInput } from "../ui/phone-input";

const Idea = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("China");
  const [annualPurchasingVolume, setAnnualPurchasingVolume] = useState("");
  const [currentBusiness, setCurrentBusiness] = useState("");
  const [personalGoal, setPersonalGoal] = useState("");

  const mutation = useMutation({
    mutationFn: () =>
      submitQuestionaire(
        name,
        email,
        phone,
        country,
        annualPurchasingVolume,
        currentBusiness,
        personalGoal
      ),
    onSuccess: () => {
      toast.success("Questionaire Submitted successfully");
    },
    onError: (error: unknown) => {
      const err = error as AuthErrorResponse;
      toast.error(err?.error || "Questionaire Submission Failed");
    },
  });

  const disabled =
    name.trim() === "" ||
    email.trim() === "" ||
    phone.trim() === "" ||
    country.trim() === "" ||
    (currentBusiness === "Yes" && annualPurchasingVolume.trim() === "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutation.mutate();
      }}
      className="max-w-[600px] w-full my-auto 
      flex flex-col items-center 
      bg-white/90 p-10 rounded-2xl shadow-2xl"
    >
      <div className="font-bold text-3xl text-center mb-8">
        <p>ANSWER THE QUICK</p>
        <p>QUESTIONAIRE BELOW TO SEE IF</p>
        <p>YOU QUALIFY FOR THE PROGRAM</p>
      </div>

      <div className="w-full mb-14 flex flex-col gap-4">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <div className="w-full flex flex-col mb-4">
          <label htmlFor={"country"} className="font-medium w-full">
            PHONE NUMBER
          </label>
          <PhoneInput defaultCountry="CN" value={phone} onChange={setPhone} />
        </div>
        <div className="w-full flex flex-col mb-4">
          <label htmlFor={"country"} className="font-medium w-full">
            COUNTRY
          </label>
          <CountryDropdown
            placeholder="Select country"
            defaultValue="CHN"
            onChange={(selectedCountry) => setCountry(selectedCountry.name)}
          />
        </div>

        {/* Do you currently have a business? */}
        <div>
          <p className="mb-4">Do you currently have a business?</p>
          <RadioGroup
            value={currentBusiness}
            onValueChange={(value) => {
              setCurrentBusiness(value);
              if (value === "No") {
                setAnnualPurchasingVolume("");
              }
            }}
            className="flex space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="business-yes" />
              <Label htmlFor="business-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="business-no" />
              <Label htmlFor="business-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Conditional annual purchasing volume */}
        {currentBusiness === "Yes" && (
          <div>
            <p className="mb-4">
              What is your annual purchasing volume? (products sourced in USD)
            </p>
            <RadioGroup
              value={annualPurchasingVolume}
              onValueChange={setAnnualPurchasingVolume}
              className="flex items-center flex-wrap justify-between"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="$5,000-$10,000" id="option-one" />
                <Label htmlFor="option-one">$5,000-$10,000</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="$10,000-$25,000" id="option-two" />
                <Label htmlFor="option-two">$10,000-$25,000</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="$0-$5,000" id="option-three" />
                <Label htmlFor="option-three">$0-$5,000</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="$25,000+" id="option-four" />
                <Label htmlFor="option-four">$25,000+</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        <div className="w-full flex flex-col gap-1">
          <label htmlFor={"your-goal"} className="font-medium w-full ml-2">
            Tell us about yourself and your goal for this program
          </label>
          <textarea
            name=""
            id=""
            value={personalGoal}
            rows={5}
            onChange={(e) => setPersonalGoal(e.target.value)}
            className="bg-primary px-4 py-2 rounded-md w-full resize-none"
          />
        </div>
      </div>
      <MainButton
        disabled={disabled || mutation.isPending}
        isLoading={mutation.isPending}
        label="START"
        type="submit"
        className="rounded-full font-medium"
      />
    </form>
  );
};

export default Idea;
