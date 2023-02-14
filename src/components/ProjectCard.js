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
				<div class="project_container">
					<div class="project_basedata_container">{this.props.basedata}
						<img src={"assets/" + this.props.baseimage} className="project_baseimage"/>
						<h1 className="project_basedata_title">{this.props.title}</h1>
					</div>
					<div class="project_hoverdata_container">
						<h1 className="project_hoverdata_title">{this.props.title}</h1>
						<p className="project_description">{this.props.description}</p>
						<div className="project_hoverdata_button_container">
							<a href={this.props.repolink} target="_blank">View repo</a>
							<a href={this.props.demolink} target="_blank">View demo</a>
						</div>
					</div>
				</div>
			);
		}
		else
		{
			return (
				<div class="project_container">
					<div class="project_basedata_container">{this.props.basedata}
						<img src={"assets/" + this.props.baseimage} className="project_baseimage"/>
						<h1 className="project_basedata_title">{this.props.title}</h1>
					</div>
					<div class="project_hoverdata_container">
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