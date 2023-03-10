import React from 'react';
import './ProjectCard.css';

class ProjectCard extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		if (this.props.demolink != null)
		{
			return (
				<div className="project_container">
					<div className="project_basedata_container">{this.props.basedata}
						<img src={"assets/" + this.props.baseimage} className="project_baseimage" alt="project icon"/>
						<h1 className="project_basedata_title">{this.props.title}</h1>
					</div>
					<div className="project_hoverdata_container">
						<h1 className="project_hoverdata_title">{this.props.title}</h1>
						<p className="project_description">{this.props.description}</p>
						<div className="project_hoverdata_button_container">
							<a href={this.props.repolink} target="_blank">View repository</a>
							<a href={this.props.demolink} target="_blank">View live demo</a>
						</div>
					</div>
				</div>
			);
		}
		else
		{
			return (
				<div className="project_container">
					<div className="project_basedata_container">{this.props.basedata}
						<img src={"assets/" + this.props.baseimage} className="project_baseimage" alt="project icon"/>
						<h1 className="project_basedata_title">{this.props.title}</h1>
					</div>
					<div className="project_hoverdata_container">
						<h1 className="project_hoverdata_title">{this.props.title}</h1>
						<p className="project_description">{this.props.description}</p>
						<div className="project_hoverdata_button_container">
							<a href={this.props.repolink} target="_blank">View repository</a>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default ProjectCard;