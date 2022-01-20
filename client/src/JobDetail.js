import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadJob } from './requests';

export class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {job: null};
  }

  componentDidMount() {
    const {jobId} = this.props.match.params;
    loadJob(jobId).then(job => this.setState({ job }));
  }

  render() {
    const {job} = this.state;

    if (!job) {
      return null;
    }

    return (
      <div>
        <h1 className="title">{job.title}</h1>
        <h2 className="subtitle">
          <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
        </h2>
        <div className="box">{job.description}</div>
      </div>
    );
  }
}
