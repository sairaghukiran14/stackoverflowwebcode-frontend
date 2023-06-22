import React from "react";

const AddQuestion = () => {
  return (
    <div className="addquestion-section">
      <div className="addquestion-body">
        <div className="header">Add Your Question</div>
        <div className="review-remainder bg-blue-200 border rounded border-blue-400 p-2">
          Please do a final review of your question and then post.
        </div>
        <div className="add-title">
          <div className="header">Title :</div>
          <div className="specify text-sm">
            Be specific and imagine you’re asking a question to another person.
          </div>
          <div className="form">
            <form action="">
              <input
                type="text"
                placeholder="Enter the title"
                className="text-sm w-full border border-blue-400 rounded px-1"
              />
              <div className="body">
                <div className="header">Body</div>
                <div className="specify text-sm">
                  The body of your question contains your problem details and
                  results. Minimum 220 characters.
                </div>
              </div>
              <input type="text" placeholder="Enter the problem description" />
              <div className="tags">
                <div className="header">Tags :</div>
                <div className="specify text-sm">
                  Tags should be seperated by commas {"(,)"}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
