"use client";
import React, { useState } from "react";
import MainButton from "../Button/MainButton";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Input from "../InputField/ideaInput";
import { useMutation } from "@tanstack/react-query";
import { submitQuestionaire } from "@/actions/idea/actions";
import { toast } from "sonner";
import { AuthErrorResponse } from "../Login/Form";

const Idea = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [annualPurchasingVolume, setAnnualPurchasingVolume] = useState("");

  const [currentBuisness, setCurrentBuisness] = useState("");
  const [personalGoal, setPersonalGoal] = useState("");

  const mutation = useMutation({
    mutationFn: () =>
      submitQuestionaire(
        name,
        email,
        phone,
        country,
        annualPurchasingVolume,
        currentBuisness,
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
    annualPurchasingVolume.trim() === "";

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
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          label="PHONE NUMBER"
          type="tel"
        />
        <Input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label="COUNTRY"
        />
        <div>
          <p className="mb-4">
            What is your annual purchasing volume? (prolcts sourcedin USD)
          </p>
          <RadioGroup
            value={annualPurchasingVolume}
            onValueChange={setAnnualPurchasingVolume}
            className="flex items-center flex-wrap justify-between"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="$5,000-$10.000" id="option-one" />
              <Label htmlFor="option-one">$5,000-$10.000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="$10.00-$25.0" id="option-two" />
              <Label htmlFor="option-two">$10.00-$25.0</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="$0-$5.000" id="option-three" />
              <Label htmlFor="option-three">$0-$5.000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="$25.000+" id="option-four" />
              <Label htmlFor="option-four">$25.000+</Label>
            </div>
          </RadioGroup>
        </div>
        <Input
          value={currentBuisness}
          onChange={(e) => setCurrentBuisness(e.target.value)}
          label="Do you currently have a buisness?"
        />
        <Input
          value={personalGoal}
          onChange={(e) => setPersonalGoal(e.target.value)}
          label="Tell us about yourself and your goal for this program"
        />
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
