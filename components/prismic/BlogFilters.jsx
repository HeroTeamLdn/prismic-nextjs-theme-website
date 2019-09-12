import React, { useState, useEffect } from "react";
import { Select, Radio } from "../ui/forms";

import "./blogFilters.scss";

const BlogFilters = ({ onChange }) => {
  const [values, setValues] = useState({
    postType: "All",
    sorting: "desc",
    tag: ""
  });

  const onChangeInput = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  const onChangeDropdown = (name, option) => {
    setValues(values => ({
      ...values,
      [name]: option.value
    }));
  };

  useEffect(() => {
    onChange(values);
  }, [values]);

  return (
    <div className="row">
      <div className="col-sm-12">
        <form>
          <div className="blog-filters spacing-lg">
            <div className="radiogroup pr-5">
              <label>
                <span className="label">Filter:</span>
              </label>
              <Radio
                id={"radio_news"}
                name={"postType"}
                value="News"
                label={"News"}
                onChange={onChangeInput}
              ></Radio>
              <Radio
                id={"radio_articles"}
                name={"postType"}
                value="Article"
                label={"Articles"}
                onChange={onChangeInput}
              ></Radio>
              <Radio
                id={"radio_events"}
                name={"postType"}
                value="Event"
                label={"Events"}
                onChange={onChangeInput}
              ></Radio>
              <Radio
                id={"radio_all"}
                name={"postType"}
                value="All"
                label={"All"}
                checked={values.postType === "All" && "checked"}
                onChange={onChangeInput}
              ></Radio>
            </div>
            <div className="selectGroup">
              <div className="pr-5">
                <Select
                  label="Sorting"
                  name="sorting"
                  value={values.sorting}
                  onChange={option => onChangeDropdown("sorting", option)}
                  options={[
                    { label: "Date Descending", value: "desc" },
                    { label: "Date Ascending", value: "" }
                  ]}
                />
              </div>
              <div>
                <Select
                  label="Tag"
                  name="tag"
                  value={values.tag}
                  onChange={option => onChangeDropdown("tag", option)}
                  options={[
                    { label: "All", value: "" },
                    { label: "Environment", value: "Environment" },
                    { label: "Business", value: "Business" },
                    { label: "Social", value: "Social" },
                    { label: "Engineering", value: "Engineering" }
                  ]}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogFilters;
