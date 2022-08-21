# QnA

### Planning

> What do you think are the greatest areas of risk in completing the project?

The greatest risk upon first review is mostly the unknowns involved, such as:
- How does the github API work? Are we familiar with this API and its capabilities? Are we sure it can allow us to accomplish the requirements of this project?
- We have static wireframes, but what do we know about the actual look and feel of the application? How are we planning on transitioning from these static views with good user look and feel? The devil tends to be in the details with design like this, so explicit communication about how we want things like error states to behave and communicate to the user is key in my opinion.
- Is there any kind of rate limiting to the backend? If so, how are we planning on dealing with that and displaying those limitations to the user when we encounter them?
- Do we have any control over the API's we are dealing with? (In this case, obviously not.) If not, what is our plan for when they change? Are we planning on supporting this indefinitely?

Typically these are the questions I would want answers to from the relevant stakeholders during a projects planning phase. That may mean time for Product managers, Designers, and Devs to go collect these answers so we can better estimate the effort involved in a project before writing any code whatsoever.

> What changes/additions would you make to the design?

- I'm not a huge fan of where the 'X' Button is located, I think this is a little non-standard and would likely ask for more design input into why this is where it is.
- I would also talk about changing the static URL in the top right of the issues view to another search area, so the user doesn't have to go back and forth between pages to search for new URLs.

> List a two or three features that you would consider implementing in the future that would add significant value to the project.
- I would make the issue card's titles clickable, and link to the actual github issue. I think this would be a feature that is low investment effort because we already have the URL data, and would be useful to many users.
- As mentioned above, I would add a search function to the issue view page to save users effort switching between pages.
- As it is currently implemented the app bulk loads the issues, I would paginate this with scroll listening to support infinite scroll viewing of the issues.
- I would add a textfilter to filter titles and issue bodies by text.


---

### Looking Back

> Describe the major design/build decisions and why you made them.

- I broke the application down into three major parts, the search page, the viewer page, and cards. In a real production environment I would likely break this down further because some aspects of these major pages would likely be standardized across OTHER pages, and so reusing pieces would be very important to maintain a common look and feel.
- For the sake of time I chose to not handle the pagination and just bulk load all issues upfront. This is absolutely NOT how I would do this for a real product application, and would instead paginate with either page buttons or scroll listening / infinite scroll.
- I chose to use Typescript mostly due to familiarity and its benefits for IDE development and hinting while rapidly prototyping. It helps when you are quickly changing the params available to Components by reminding you to go change props passed in or accepted.

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

- The assignment took about 6 hours total I believe.
- If I were to break it down it was probably 4 hours development, 1.5 hours debugging as I build each individual component (not all at once), and 0.5 hours familiarizing myself with octokit / github's API.

> If you could go back and give yourself advice at the beginning of the project, what would it be?

- I would probably tell myself to just acknowledge that some UI elements will not be perfect, and to focus on the bare minimum UI early, then the data flow and edge cases, then clean up any UI elements as time allowed at the end.

> Did you learn anything new?

- Yes! I definitely had not worked with the github API / octokit before, and it was relatively pleasant to deal with. I will say the documentation isn't fantastic, but the calls are relatively intuitive so it wasn't the worst experience.

> Do you feel that this assignment allowed you to showcase your abilities effectively?

- Yes... somewhat. Given a time limit and the size of the effort involved it definitely forces some choices to be made about where to leave things in a semi unfinished state and where not to, which is itself a good process to talk about; however that definitely causes some anxiety around what the reviewers expectations may be.

- I think as any developer progresses in their career, the soft intangibles become more and more important. I firmly believe that software follows the 80/20 rule, and the 80% effort around making software is outside the actual coding. Knowing what questions to ask and what answers are needed before sitting down and committing to writing a piece of software is absolutely fundamental to writing good code for a long lasting codebase. Obviously determining the precense of these abilities / this mindset isn't very possible via assignments like these, but I still think its worth bringing up!

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?
- I would say that it didn't address the skills that surround the development process, nor can it due to the nature of interview assignments. Things like asking the right questions before starting out on a project, pull request formatting / sizing and discussion, and a few other "soft" skills that surround the development process and our interactions with other team members and stakeholders. This is natural obviously, and I hope to get a chance to discuss some of those interesting things with your team sometime soon!
