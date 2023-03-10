import axios from "axios";
import { Button } from "components/button";
import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import { ReactQuillEditor } from "components/reactQuillEditor";
import useOnChange from "hooks/useOnChange";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DatePicker from "react-date-picker";
import { apiURL } from "config/config";
import { ImageUpload } from "components/image";

const categoriesData = ["architecture", "education", "food", "home"];

const CampaignAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm({
    defaultValues: {
      title: "",
      short_description: "",
      goal: "",
      raised_amount: "",
      amount_prefilled: "",
      video: "",
    },
  });
  const [content, setContent] = useState("");
  const [countries, setCountries] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [filterCountry, setFilterCountry] = useOnChange(500);
  useEffect(() => {
    async function fetchCountries() {
      if (!filterCountry) return;
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message, {
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
      }
    }
    fetchCountries();
  }, [filterCountry]);

  const getDropdowLabel = (name) => {
    const value = watch(name);
    return value;
  };

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  const resetValues = () => {
    setContent("");
    setCountries("");
    setStartDate(new Date());
    setEndDate(new Date());
    reset({
      title: "",
      short_description: "",
      goal: "",
      raised_amount: "",
      amount_prefilled: "",
      video: "",
    });
  };

  const handleAddNewCampaign = async (values) => {
    const newValues = { ...values, content, startDate, endDate };
    console.log("handleAddNewCampaign ~ newValues", newValues);
    try {
      await axios.post(`${apiURL}/campaigns`, {
        ...values,
        content,
        startDate: startDate.toLocaleDateString("vi-VI"),
        endDate: endDate.toLocaleDateString("vi-VI"),
      });
      toast.success("Create new campaign successfully", {
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
      resetValues();
    } catch (error) {
      toast.error("Can not create new campaign", {
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
    }
  };

  return (
    <div className="bg-white rounded-10 px-[66px] py-10 mx-[52px]">
      <div className="mb-10 text-center">
        <h1 className="inline-block text-25px text-text2 font-bold rounded-10 px-60px py-22px bg-text4 bg-opacity-[0.08]">
          Start a Campaign ????
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a titel"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder="Select a category"
                selectedName={getDropdowLabel("category")}
              ></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    key={category}
                    value="1"
                    onClick={() =>
                      handleSelectDropdownOption("category", category)
                    }
                  >
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label htmlFor="short_description">Short Description *</Label>
          <Textarea
            control={control}
            name="short_description"
            placeholder="Write a short description...."
          ></Textarea>
        </FormGroup>

        <FormGroup>
          <Label>Story *</Label>
          <ReactQuillEditor
            content={content}
            setContent={setContent}
          ></ReactQuillEditor>
        </FormGroup>

        <FormRow>
          <FormGroup>
            <Label>Featured Image</Label>
            <ImageUpload
              onChange={setValue}
              name="featured_image"
            ></ImageUpload>
          </FormGroup>
        </FormRow>

        <div className="mt-10 mb-50px flex items-center justify-start gap-x-5 text-white bg-secondary20% h-[120px] px-45px rounded-10 overflow-hidden relative">
          <div className="">
            <svg
              width={32}
              height={40}
              viewBox="0 0 32 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4997 9.979H9.16634C8.66634 9.979 8.33301 10.3123 8.33301 10.8123C8.33301 11.3123 8.66634 11.6457 9.16634 11.6457H22.4997C22.9997 11.6457 23.333 11.3123 23.333 10.8123C23.333 10.3123 22.9997 9.979 22.4997 9.979Z"
                fill="white"
              />
              <path
                d="M8.4999 7.81266C8.4999 8.146 8.83324 8.31266 9.16657 8.31266H22.4999C22.8332 8.31266 23.1666 8.146 23.1666 7.81266L26.4999 1.146C26.6666 0.812663 26.6666 0.479329 26.3332 0.145996C26.1666 -0.0206706 25.8332 -0.0206706 25.4999 0.145996L19.3332 3.146L16.4999 0.312663C16.1666 -0.0206706 15.6666 -0.0206706 15.3332 0.312663L12.3332 3.146L6.16657 0.145996C5.83324 -0.0206706 5.4999 -0.0206706 5.16657 0.145996C4.83324 0.312663 4.9999 0.812663 5.16657 1.146L8.4999 7.81266Z"
                fill="white"
              />
              <path
                d="M23.1667 13.6456C23 13.4789 22.6667 13.3123 22.5 13.3123H9.16667C9 13.3123 8.66667 13.4789 8.5 13.6456C8.16667 13.9789 0 22.6456 0 27.4789C0 34.3123 7.16667 39.9789 15.8333 39.9789C24.5 39.9789 31.6667 34.3123 31.6667 27.4789C31.6667 22.6456 23.5 13.9789 23.1667 13.6456ZM16.6667 33.3123V34.1456C16.6667 34.6456 16.3333 34.9789 15.8333 34.9789C15.3333 34.9789 15 34.6456 15 34.1456V33.3123C13.1667 32.9789 11.8333 31.8123 11.6667 30.3123C11.6667 29.8123 12 29.4789 12.5 29.4789C13 29.4789 13.3333 29.8123 13.3333 30.3123C13.3333 30.9789 14.1667 31.6456 15 31.8123V28.4789C12.8333 27.9789 11.6667 26.8123 11.6667 25.3123C11.6667 23.6456 13.1667 22.3123 15 21.9789V21.1456C15 20.6456 15.3333 20.3123 15.8333 20.3123C16.3333 20.3123 16.6667 20.6456 16.6667 21.1456V21.6456C18.5 21.9789 19.8333 23.1456 20 24.6456C20 25.1456 19.6667 25.4789 19.1667 25.4789C18.6667 25.4789 18.3333 25.1456 18.3333 24.6456C18.3333 23.9789 17.5 23.3123 16.6667 23.1456V26.4789C18.8333 26.9789 20 28.1456 20 29.6456C20 31.6456 18.5 32.9789 16.6667 33.3123Z"
                fill="white"
              />
              <path
                d="M16.667 28.4785V31.4785C17.667 31.3119 18.3337 30.6452 18.3337 29.9785C18.3337 29.3119 17.8337 28.8118 16.667 28.4785Z"
                fill="white"
              />
              <path
                d="M13.333 24.9788C13.333 25.6454 13.833 26.1454 14.9997 26.4788V23.4788C13.9997 23.6454 13.333 24.3121 13.333 24.9788Z"
                fill="white"
              />
            </svg>
          </div>
          <h2 className="font-bold text-25px">
            You will get 90% of total raised
          </h2>
          <div className="flex gap-x-[6px] absolute right-[90px]">
            <div className="w-[141px] h-[141px] border-[34px] border-white border-opacity-[0.05] rounded-full -translate-y-2/4"></div>
            <div className="w-[141px] h-[141px] border-[34px] border-white border-opacity-[0.05] rounded-full translate-y-2/4"></div>
          </div>
        </div>

        <FormRow>
          <FormGroup>
            <Label htmlFor="goal">Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="raised_amount">Raised Amount *</Label>
            <Input
              control={control}
              name="raised_amount"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label htmlFor="amount_prefilled">Amount Prefilled</Label>
            <Input
              control={control}
              name="amount_prefilled"
              placeholder="Amount Prefilled"
            ></Input>
            <p className="text-sm leading-6 text-text3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="video">Video</Label>
            <Input control={control} name="video" placeholder="Video"></Input>
            <p className="text-sm leading-6 text-text3">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder="Select one"
                className="text-base py-13px"
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option value="1">Option 1</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>

          <FormGroup>
            <Label>Counrty</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder="Select a country"
                className="text-base py-13px"
                selectedName={getDropdowLabel("country")}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search a country"
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() =>
                        handleSelectDropdownOption(
                          "country",
                          country?.name?.common
                        )
                      }
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label htmlFor="start_date">Start Date</Label>
            <DatePicker
              onChange={setStartDate}
              value={startDate}
              format="dd-MM-yyyy"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="end_date">End Date</Label>
            <DatePicker
              onChange={setEndDate}
              value={endDate}
              format="dd-MM-yyyy"
            />
          </FormGroup>
        </FormRow>

        <div className="mt-5px">
          <Button type="submit" kind="primary" className="px-10 mx-auto">
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
