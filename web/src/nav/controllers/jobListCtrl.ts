/// <reference path="../main.ts" />

namespace parlab.nav {
    export class JobListCtrl {

        constructor($scope, jobService:common.JobService, $routeParams) {
            var jobId = $routeParams.jobId;
            jobService.list()
                .then((data)=> {
                    $scope.jobs = data.jobs.job;
                    $scope.jobs.forEach((job)=> {
                        if (job['id'] == jobId)
                            return job['selected'] = true;

                        job['selected'] = false;
                    });

                    console.log('jobList', data);
                });
        }
    }

    registerController('jobListCtrl', JobListCtrl);
}