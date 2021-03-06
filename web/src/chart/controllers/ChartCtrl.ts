/// <reference path="../main" />
/// <reference path="../services/chartService" />
/// <reference path="../config/chartOptions" />

namespace parlab.chart {
    export class ChartCtrl {

        constructor($scope:IChartScope,
                    chartService:ChartService,
                    job,
                    toolbarService:toolbar.ToolbarService,
                    $routeParams) {
            var jobId = $routeParams.jobId;
            var nodeName = $routeParams.nodeName;

            // Set title
            if (nodeName)
                toolbarService.setTitle('Chart', jobId, nodeName);
            else
                toolbarService.setTitle('Chart', jobId);


            var tasks = job.tasks;
            var nodeTasks = job.nodeTasks;

            console.log('ChartCtrl', 'job', job);

            if (nodeName)
                chartService.setChart(nodeTasks[nodeName]);
            else
                chartService.setChart(tasks);

            $scope.nodes = nodeTasks;
        }
    }

    export interface IChartScope extends ng.IScope {
        chartConfig:any;
        nodes:Object;
    }

    registerController('chartCtrl', ChartCtrl);
}
