(function () {

    var app = angular.module('managementController', ['authServices', 'supervisorServices', 'locationServices', 'clientServices'])
    app.config(function () {

        console.log("Management Controller Loaded")
    })

    app.controller('managementCtrl', function ($scope, Auth, $timeout, $location, User, $rootScope, Location, Client, Supervisor) {
        $scope.username = "";
        $scope.payperiod = '';
        $scope.payPeriodStartDate = "";
        $scope.payPeriodEndDate = "";
        $scope.currentUserHistoryFile = "";
        $scope.loading = false;
        $scope.loadingUsers = false;
        $scope.loadingPersonalHistory = false;
        $scope.generalHistoryTitle = false;
        $scope.personalHistoryTitle = false;
        $scope.managementPage = true;
        $scope.clientsPage = false;
        $scope.payslipPageOpen = false;
        $scope.employeesPage = false;
        $scope.userFilePage = false;
        $scope.openIssue = false;
        $scope.closeIssue = false;
        $scope.individualPayPeriodOpen = true;
        $scope.historyEntryOpen = true;
        $scope.bookedJobs = false;
        $scope.employeeHome = true;
        $scope.employeeListOpen = false;
        $scope.complaintsOpened = false;
        $scope.complaintsSelected = false;
        $scope.bookedJobsSelected = false;
        $scope.timesheetsSelected = false;
        $scope.payslipPageSelected = false;
        $scope.delinquentTimeSheetSelected = false;
        $scope.disputesSelected = false;
        $scope.jobsSelected = true;
        $scope.bookedJobsPageOpened = false;
        $scope.complaintsPageOpened = false;
        $scope.historyPageOpen = false;
        $scope.generalHistoryOpen = false;
        $scope.personalHistoryOpen = false;
        $scope.commentsPageOpened = false;
        $scope.commentsPageOpened = false;
        $scope.noComments = false;
        $scope.noComplaints = false;
        $scope.addJobPageOpen = false;
        $scope.commentsSelected = false;
        $scope.payslipGenerationOpen = false;
        $scope.slidein = false;
        $scope.slideout = false;
        $scope.fadeOut = false;
        $scope.jobsPageOpen = true;
        $scope.historyPageOpen = false;
        $scope.openJob = 0;
        $scope.timesheetsPageOpen = false;
        $scope.disputesPageOpen = false;
        $scope.incompletePayPeriod = false;
        $scope.incompletePayPeriodPageOpen = false;
        $scope.chartsPageOpen = true;
        $scope.usersPageIndex = ""
        $scope.userDetailsPageOpened = true;
        $scope.delinquentTimeSheetPageOpened = false;
        $scope.timesheetEntryOpen = true;
        $scope.curTimesheet = null;
        $scope.noInput = false;
        $scope.showChart = true;
        $scope.removeChart = false;
        $scope.searchResults = false;
        $scope.userList = false;
        $scope.usersLoaded = false;
        $scope.noSearchResults = false;
        $scope.loadingNewJob = false;
        $scope.loadingAddAndRemoveDelinquentTimeSheet = false;
        $scope.areYouSure = false;
        $scope.payPeriodUpdated = false;
        $scope.delinquentTimeSheet = false;
        $scope.currentUserFile = "";
        $scope.employees = [];
        $scope.currentEmployee = [];
        $scope.employeesForHistory = [];
        $scope.employeesPaginated = [];
        $scope.payPeriods = [];
        $scope.payPeriodHistory = [];
        $scope.page = 0;
        $scope.minVarIn = "";
        $scope.hrVarIn = "";
        $scope.hrVarOut = "";
        $scope.minVarOut = ""
        $scope.numaro = 4;
        $scope.pageArray = [];
        $scope.clients = [];
        $scope.locations = [];
        $scope.supervisors = [];
        $scope.jobData = {};
        $scope.delinquentTimeSheetArray = [];
        $scope.timeData = {

        };
        $scope.newPayPeriodObject = {

        }
        $scope.employeeJobDetails = {};
        $scope.delinquentJobDetails = {};
        $scope.pageLimit = 4;
        $scope.currentPage = 1;
        $scope.curPeriod = null;
        $scope.curHistory = null;
        $scope.numPerPage = 10;
        $scope.maxSize = 5;
        $scope.hoursWorked = 0;
        $scope.finalHours = "";
        $scope.hourIterator = 0;
        $scope.minIterator = 0;
        //$rootScope.payPeriod = 0;
        $scope.displayDate = moment().weekday(0)
        // $scope.displayDay = $scope.displayDate._weekdays[0]
        console.log($scope.displayDate)
        $scope.date = new Date();
        $scope.dateNow = $scope.date.getDate()
        $scope.monthArray = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
        ]
        // $scope.
        $scope.month = $scope.date.getMonth() + 1;
        $scope.year = moment().year();
        $scope.yearString = String($scope.year)
        $scope.dateCompiled = "" + $scope.month + "/" + $scope.dateNow + "/" + $scope.yearString[2] + $scope.yearString[3]
        console.log($scope.dateCompiled)
        $scope.monthLiteral = "";
        $scope.day = $scope.date.getDay();
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40]

        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        setTimeout(function () {

            //$('.tap-target').tapTarget('open');
            $('select').material_select();

        }, 15000);
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        }
        console.log($scope.monthLiteral, "$scope.monthLiteral")
        $scope.payperiods = [];
        $scope.currentPayPeriod = 0;
        $scope.jobDetails = [];
        $scope.comments = [];
        $scope.userSearchResults = [];
        $scope.currentUserPhoneNumber = "";
        $scope.qlhLogo = 'data:image/jpeg;base64,/9j/4QaiRXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAeAAAAcgEyAAIAAAAUAAAAkIdpAAQAAAABAAAApAAAANAACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykAMjAxODowNToyNiAxNjozNDo1MAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAY6ADAAQAAAABAAAAVAAAAAAAAAAGAQMAAwAAAAEABgAAARoABQAAAAEAAAEeARsABQAAAAEAAAEmASgAAwAAAAEAAgAAAgEABAAAAAEAAAEuAgIABAAAAAEAAAVsAAAAAAAAAEgAAAABAAAASAAAAAH/2P/tAAxBZG9iZV9DTQAB/+4ADkFkb2JlAGSAAAAAAf/' +
            'bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAVABjAwEiAAIRAQMRAf/dAAQAB//EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A9VSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSU//Q9USSSSUpJJJJSkHJzMbEZvyLG1jtPJ/qt+kq+Xd1Oy44+HUK2j6WTZwJ/wBGz89LF6Rj0v8AXuJyck83W6/5jfosUMsk5Exxx20M5+mA/uj5sjKIQAEpy32hDWf1/cRjq+Rd7sTBtur7PdFYP9Xep1dYo3ivKY/EsOgFohp/q2/QV9RsrrtYWWND2nlrhIS9vMNfd4j2lGPB/wA31/8APVx4zp7dDuJHj/53pZAgiRqElTZhWYxnCs2198ewks/6276dStVuc5suaWO7tMH8QpIyJ0lHhP8AjR/' +
            'wZLJRA1BsfZL/ABWSSSSctUkkkkp//9H1VJJJJSG6q95/R3GryDWn/qlVtxOoAF56iWNaJJNbIAHclaC5v/GKckfUzqf2ad/pjdt52b2et/4Fv3JksUZbmX0nOP8A0ZL45DHbh+sYy/6Qa+P9Y+l5eaMHG+s1L8hx2tYGMhzv3WPP6N/9hyvl946i3ph6z+vOr9ZuP6TdxrB2+p/V3LkPrTX9Wm/4tcV2EKBfsx/sTq9vqm6Wert2/pPV/nfWWhTY+v8Axj9OdmODLf2KPVLjHv3e/n+Umfdsfef/AIbl/wC/Xe/PtD/wvH/3r2FnUsLEycXAyshozMsEUMdo6wsE2FoHtUh1PAd1F3Sxc05za/WdRruFZO31P6u5cX9eHZ9n1u+rB6Q+j7YftXoPv3Opnazd6no+/wCju+iodAHWm/4y8kdbdjPzP2YNcQPFez1GbP5/371MxPoKSSSSlJJJJKUkkkkp/9L1RJOkkpZM9jHscx7Q5jgQ5pEgg8ghSSSU8b1H/Fv0sdQxOqdBrp6fmYt3qvY9hsosH7rqHO/ROb/g31La6r9U/q91q9uV1XCZk5DWCsPLniGgl232OZ+c5bCSSnLx/qz0LGOE6jEaw9M3/YiC79H6utu2Xfn/AMtWW9K6e3qbuqikDPfV6Dr5MmsHd6cTs+l/JVtJJSySdJJSySdJJSySdJJT/9P1RJOkkpZJOkkpZJOkkpZJOkkpZJOkkpZJOkkpZJOkkp//1PVUl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKf/2f/' +
            'tDpxQaG90b3Nob3AgMy4wADhCSU0EJQAAAAAAEAAAAAAAAAAAAAAAAAAAAAA4QklNBDoAAAAAAOUAAAAQAAAAAQAAAAAAC3ByaW50T3V0cHV0AAAABQAAAABQc3RTYm9vbAEAAAAASW50ZWVudW0AAAAASW50ZQAAAABDbHJtAAAAD3ByaW50U2l4dGVlbkJpdGJvb2wAAAAAC3ByaW50ZXJOYW1lVEVYVAAAAAEAAAAAAA9wcmludFByb29mU2V0dXBPYmpjAAAADABQAHIAbwBvAGYAIABTAGUAdAB1AHAAAAAAAApwcm9vZlNldHVwAAAAAQAAAABCbHRuZW51bQAAAAxidWlsdGluUHJvb2YAAAAJcHJvb2ZDTVlLADhCSU0EOwAAAAACLQAAABAAAAABAAAAAAAScHJpbnRPdXRwdXRPcHRpb25zAAAAFwAAAABDcHRuYm9vbAAAAAAAQ2xicmJvb2wAAAAAAFJnc01ib29sAAAAAABDcm5DYm9vbAAAAAAAQ250Q2Jvb2wAAAAAAExibHNib29sAAAAAABOZ3R2Ym9vbAAAAAAARW1sRGJvb2wAAAAAAEludHJib29sAAAAAABCY2tnT2JqYwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAAAAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAUgAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAHg4Qkl' +
            'NBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAE4QklNBAIAAAAAAAQAAAAAOEJJTQQwAAAAAAACAQE4QklNBC0AAAAAAAYAAQAAAAI4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADSQAAAAYAAAAAAAAAAAAAAFQAAABjAAAACgBVAG4AdABpAHQAbABlAGQALQAyAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAABjAAAAVAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAVAAAAABSZ2h0bG9uZwAAAGMAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAFQAAAAAUmdodGxvbmcAAABjAAAAA3VybFRFWFQAAAABAAAAAAAAbnVsbFRFWFQAAAABAAAAAAAATXNnZVRFWFQAAAABAAAAAAAGYWx0VGFnVEVYVAAAAAEAAAAAAA5jZWxsVGV4dElzSFRNTGJvb2wBAAAACGNlbGxUZXh0VEVYVAAAAAEAAAAAAAlob3J6QWxpZ25lbnVtAAAAD0VTbGljZUhvcnpBbGlnbgAAAAdkZWZhdWx0AAAACXZlcnRBbGlnbmVudW0AAAAPRVNsaWNlVmVydEFsaWduAAAAB2RlZmF1bHQAAAALYmdDb2xvclR5cGVlbnVtAAAAEUVTbGljZUJHQ29sb3JUeXBlAAAAAE5vbmUAAAAJdG9wT3V0c2V0bG9uZwAAAAAAAAAKbGVmdE91dHNldGxvbmcAAAAAAAAADGJvdHRvbU91dHNldGxvbmcAAAAAAAAAC3JpZ2h0T3V0c2V0bG9uZwAAAAAAO' +
            'EJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQQUAAAAAAAEAAAAAjhCSU0EDAAAAAAFiAAAAAEAAABjAAAAVAAAASwAAGJwAAAFbAAYAAH/2P/tAAxBZG9iZV9DTQAB/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAVABjAwEiAAIRAQMRAf/dAAQAB//EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A9VSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSU//Q9USSSSUpJJJJSkHJzMbEZvyLG1jtPJ/qt+kq+Xd1Oy44+HUK2j6WTZwJ/wBGz89LF6Rj0v8AXuJyck83W6/5jfosUMsk5Exxx20M5+mA/uj5sjKIQAEpy32hDWf1/cRjq+Rd7sTBtur7PdFYP9Xep1dYo3ivKY/EsOgFohp/q2/QV9RsrrtYWWND2nlrhIS9vMNfd4j2lGPB/wA31/8APVx4zp7dDuJHj/53pZAgiRqElTZhWYxnCs2198ewks/6276dStVuc5suaWO7tMH8QpIyJ0lHhP8AjR/wZLJRA1BsfZL/ABWSSSSctUkkkkp//9H1VJJJJSG6q95/R3GryDWn/qlVtxOoAF56iWNaJJNbIAHclaC5v/GKckfUzqf2ad/pjdt52b2et/4Fv3JksUZbmX0nOP8A0ZL45DHbh+sYy/6Qa+P9Y+l5eaMHG+s1L8hx2tYGMhzv3WPP6N/9hyvl946i3ph6z+vOr9ZuP6TdxrB2+p/V3LkPrTX9Wm/4tcV2EKBfsx/sTq9vqm6Wert2/pPV/nfWWhTY+v8Axj9OdmODLf2KPVLjHv3e/n+Umfdsfef/AIbl/wC/Xe/PtD/wvH/3r2FnUsLEycXAyshozMsEUMdo6wsE2FoHtUh1PAd1F3Sxc05za/WdRruFZO31P6u5cX9eHZ9n1u+rB6Q+j7YftXoPv3Opnazd6no+/wCju+iodAHWm/4y8kdbdjPzP2YNcQPFez1GbP5/371MxPoKSSSSlJJJJKUkkkkp/9L1RJOkkpZM9jHscx7Q5jgQ5pEgg8ghSSSU8b1H/Fv0sdQxOqdBrp6fmYt3qvY9hsosH7rqHO/ROb/g31La6r9U/q91q9uV1XCZk5DWCsPLniGgl232OZ+c5bCSSnLx/qz0LGOE6jEaw9M3/YiC79H6utu2Xfn/AMtWW9K6e3qbuqikDPfV6Dr5MmsHd6cTs+l/JVtJJSySdJJSySdJJSySdJJT/9P1RJOkkpZJOkkpZJOkkpZJOkkpZJOkkpZJOkkpZJOkkp//1PVUl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKf/2ThCSU0EIQAAAAAAVQAAAAEBAAAADwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAAABMAQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAIABDAFMANgAAAAEAOEJJTQQGAAAAAAAHAAgAAAABAQD/4Q3WaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWN' +
            'rZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wNS0yNlQxNjozNDo1MCsxMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wNS0yNlQxNjozNDo1MCsxMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDUtMjZUMTY6MzQ6NTArMTI6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTlGRTczQ0I5RDYwRTgxMUI4QjdDNzJCOEFGQzhBNTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OThGRTczQ0I5RDYwRTgxMUI4QjdDNzJCOEFGQzhBNTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5OEZFNzNDQjlENjBFODExQjhCN0M3MkI4QUZDOEE1OCIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjk4RkU3M0NCOUQ2MEU4MTFCOEI3QzcyQjhBRkM4QTU4IiBzdEV2dDp3aGVuPSIyMDE4LTA1LTI2VDE2OjM0OjUwKzEyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTlGRTczQ0I5RDYwRTgxMUI4QjdDNzJCOEFGQzhBNTgiIHN0RXZ0OndoZW49IjIwMTgtMDUtMjZUMTY6MzQ6NTArMTI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI' +
            'CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+IMWElDQ19QUk9GSUxFAAEBAAAMSExpbm8CEAAAbW50clJHQiBYWVogB84AAgAJAAYAMQAAYWNzcE1TRlQAAAAASUVDIHNSR0IAAAAAAAAAAAAAAAEAAPbWAAEAAAAA0y1IUCAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARY3BydAAAAVAAAAAzZGVzYwAAAYQAAABsd3RwdAAAAfAAAAAUYmtwdAAAAgQAAAAUclhZWgAAAhgAAAAUZ1hZWgAAAiwAAAAUYlhZWgAAAkAAAAAUZG1uZAAAAlQAAABwZG1kZAAAAsQAAACIdnVlZAAAA0wAAACGdmlldwAAA9QAAAAkbHVtaQAAA/gAAAAUbWVhcwAABAwAAAAkdGVjaAAABDAAAAAMclRSQwAABDwAAAgMZ1RSQwAABDwAAAgMYlRSQwAABDwAAAgMdGV4dAAAAABDb3B5cmlnaHQgKGMpIDE5OTggSGV3bGV0dC1QYWNrYXJkIENvbXBhbnkAAGRlc2MAAAAAAAAAEnNSR0IgSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAASc1JHQiBJRUM2M' +
            'Tk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAADzUQABAAAAARbMWFlaIAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9kZXNjAAAAAAAAABZJRUMgaHR0cDovL3d3dy5pZWMuY2gAAAAAAAAAAAAAABZJRUMgaHR0cDovL3d3dy5pZWMuY2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAuSUVDIDYxOTY2LTIuMSBEZWZhdWx0IFJHQiBjb2xvdXIgc3BhY2UgLSBzUkdCAAAAAAAAAAAAAAAuSUVDIDYxOTY2LTIuMSBEZWZhdWx0IFJHQiBjb2xvdXIgc3BhY2UgLSBzUkdCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRlc2MAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAACxSZWZlcmVuY2UgVmlld2luZyBDb25kaXRpb24gaW4gSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2aWV3AAAAAAATpP4AFF8uABDPFAAD7cwABBMLAANcngAAAAFYWVogAAAAAABMCVYAUAAAAFcf521lYXMAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAKPAAAAAnNpZyAAAAAAQ1JUIGN1cnYAAAAAAAAEAAAAAAUACgAPABQAGQAeACMAKAAtADIANwA7AEAARQBKAE8AVABZAF4AYwBoAG0AcgB3AHwAgQCGAIsAkACVAJoAnwCkAKkArgCyALcAvADBAMYAywDQANUA2wDgAOUA6wDwAPYA+wEBAQcBDQETARkBHwElASsBMgE4AT4BRQFMAVIBWQFgAWcBbgF1AXwBgwGLAZIBmgGhAakBsQG5AcEByQHRAdkB4QHpAfIB+gIDAgwCFAIdAiYCLwI4AkECSwJUAl0CZwJxAnoChAKOApgCogKsArYCwQLLAtUC4ALrAvUDAAMLAxYDIQMtAzgDQwNPA1oDZgNyA34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSQVYBWcFdwWGBZYFpgW1BcUF1QXlBfYGBgYWBicGNwZIBlkGagZ7BowGnQavBsAG0QbjBvUHBwcZBysHPQdPB2EHdAeGB5kHrAe/B9IH5Qf4CAsIHwgyCEYIWghuCIIIlgiqCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1ELaQuAC5gLsAvIC+EL+QwSDCoMQwxcDHUMjgynDMAM2QzzDQ0NJg1ADVoNdA2ODakNww3eDfgOEw4uDkkOZA5/DpsOtg7SDu4PCQ8lD0EPXg96D5YPsw/PD+wQCRAmEEMQYRB+EJsQuRDXEPURExExEU8RbRGMEaoRyRHoEgcSJhJFEmQShBKjEsMS4xMDEyMTQxNjE4MTpBPFE+UUBhQnFEkUahSLFK0UzhTwFRIVN' +
            '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' +
            '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' +
            '/6O9+6916x/r/ANDf9He/de69Y/1/6G/6O9+6916x/r/0N/0d7917r1j/AF/6G/6O9+6916x/r/0N/wBHe/de6//R3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdf/9k='

        //$('#modal1').modal('open');
        //document.getElementById('modalbutton').click();

        // console.log($scope.dateNow, $scope.month, $scope.day,$scope.year)
        console.log($scope.dateCompiled)
        //console.log($dateCompiled.length)
        //if($scope.date == )
        if ($scope.month == 5) {
            $scope.monthLiteral = "May";
            console.log($scope.monthLiteral)
        }
        //OOPS DOESN'T INCLUDE MONDAY REMEMBER THAT...

        if ($scope.month == 1) {
            if ($scope.dateNow == 1 || 2 || 3 || 4 || 5 || 6 || 7) {

                $rootScope.payPeriod = 1;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 8 || 9 || 10 || 11 || 12 || 13 || 14) {

                $rootScope.payPeriod = 2;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 15 || 16 || 17 || 18 || 19 || 20 || 21) {

                $rootScope.payPeriod = 3;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 22 || 23 || 24 || 25 || 26 || 27 || 28) {

                $rootScope.payPeriod = 4;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 29 || 30 || 31) {

                $rootScope.payPeriod = 5;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        if ($scope.month == 2) {

            if ($scope.dateNow == 1 || 2 || 3 || 4) {

                $rootScope.payPeriod = 5;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 5 || 6 || 7 || 8 || 9 || 10 || 11) {

                $rootScope.payPeriod = 6;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 12 || 13 || 14 || 15 || 16 || 17 || 18) {

                $rootScope.payPeriod = 7;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 19 || 20 || 21 || 22 || 23 || 24 || 25) {

                $rootScope.payPeriod = 8;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 26 || 27 || 28) {

                $rootScope.payPeriod = 9;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        if ($scope.month == 3) {
            if ($scope.dateNow == 1 || 2 || 3 || 4) {

                $rootScope.payPeriod = 9;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 5 || 6 || 7 || 8 || 9 || 10 || 11) {

                $rootScope.payPeriod = 10;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 12 || 13 || 14 || 15 || 16 || 17 || 18) {

                $rootScope.payPeriod = 11;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 19 || 20 || 21 || 22 || 23 || 24 || 25) {

                $rootScope.payPeriod = 12;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 26 || 27 || 28 || 29 || 30 || 31) {

                $rootScope.payPeriod = 13;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        if ($scope.month == 4) {
            if ($scope.dateNow == 1) {

                $rootScope.payPeriod = 13;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 2 || 3 || 4 || 5 || 6 || 7 || 8) {

                $rootScope.payPeriod = 14;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 9 || 10 || 11 || 12 || 13 || 14 || 15) {

                $rootScope.payPeriod = 15;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 16 || 17 || 18 || 19 || 20 || 21 || 22) {

                $rootScope.payPeriod = 16;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 24 || 25 || 26 || 27 || 28 || 29 || 30) {

                $rootScope.payPeriod = 18;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        if ($scope.month == 5) {
            if ($scope.dateNow == 1 || 2 || 3 || 4 || 5 || 6 || 7) {

                $rootScope.payPeriod = 19;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 8 || 9 || 10 || 11 || 12 || 13 || 14) {

                $rootScope.payPeriod = 20;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 15 || 16 || 17 || 18 || 19 || 20 || 21) {

                $rootScope.payPeriod = 21;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 22 || 23 || 24 || 25 || 26 || 27 || 28) {

                $rootScope.payPeriod = 22;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 28 || 29 || 30 || 31) {

                $rootScope.payPeriod = 1;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        if ($scope.month == 6) {

            if ($scope.dateNow == 1 || $scope.dateNow == 2 || $scope.dateNow == 3) {

                $rootScope.payPeriod = 1;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 4 || $scope.dateNow == 5 || $scope.dateNow == 6 || $scope.dateNow == 7 || $scope.dateNow == 8 || $scope.dateNow == 9 || $scope.dateNow == 10) {

                $rootScope.payPeriod = 2;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)
                $scope.newPPObject = {}
                $scope.newPPObject.newpayperiod = $rootScope.payPeriod;
                /* User.getUsers().then(function(data){
                     for(var z= 0; z< data.data.users.length;z++){
                         for(var d = 0; d< data.data.users[z].length; d++){
 
                         }
                     }
                 })
                 */
                /*
                User.changeUserPayPeriod($scope.newPPObject).then(function (data) {
                    console.log(data)
                    if (data.data.success) {
                        $scope.payPeriodUpdated = true;
                        //$timeout(function(){
                        //    $scope.payPeriodUpdated = false;
                        //},)
                    }
                })
                */

            }
            if ($scope.dateNow == 11 || $scope.dateNow == 12 || $scope.dateNow == 13 || $scope.dateNow == 14 || $scope.dateNow == 15 || $scope.dateNow == 16 || $scope.dateNow == 17) {

                $rootScope.payPeriod = 3;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 18 || $scope.dateNow == 19 || $scope.dateNow == 20 || $scope.dateNow == 21 || $scope.dateNow == 22 || $scope.dateNow == 23 || $scope.dateNow == 24) {

                $rootScope.payPeriod = 4;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 25 || $scope.dateNow == 26 || $scope.dateNow == 27 || $scope.dateNow == 28 || $scope.dateNow == 39 || $scope.dateNow == 30) {

                $rootScope.payPeriod = 5;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        if ($scope.month == 7) {
            if ($scope.dateNow == 1) {

                $rootScope.payPeriod = 5;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 2 || 3 || 4 || 5 || 6 || 7 || 8) {

                $rootScope.payPeriod = 6;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 9 || 10 || 11 || 12 || 13 || 14 || 15) {

                $rootScope.payPeriod = 7;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 16 || 17 || 18 || 19 || 20 || 21 || 22) {

                $rootScope.payPeriod = 8;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 23 || 24 || 25 || 26 || 27 || 28 || 29) {

                $rootScope.payPeriod = 9;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 30 || 31) {

                $rootScope.payPeriod = 10;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        if ($scope.month == 8) {
            if ($scope.dateNow == 1 || 2 || 3 || 4 || 5) {

                $rootScope.payPeriod = 10;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 6 || 7 || 8 || 9 || 10 || 11 || 12) {

                $rootScope.payPeriod = 11;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 13 || 14 || 15 || 16 || 17 || 18 || 19) {

                $rootScope.payPeriod = 12;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 20 || 21 || 22 || 23 || 24 || 25 || 26) {

                $rootScope.payPeriod = 13;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 27 || 28 || 29 || 30 || 31) {

                $rootScope.payPeriod = 14;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        if ($scope.month == 9) {
            if ($scope.dateNow == 1 || 2) {

                $rootScope.payPeriod = 15;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 3 || 4 || 5 || 6 || 7 || 8 || 9) {

                $rootScope.payPeriod = 16;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 10 || 11 || 12 || 13 || 14 || 15 || 16) {

                $rootScope.payPeriod = 17;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 17 || 18 || 19 || 20 || 21 || 22 || 23) {

                $rootScope.payPeriod = 18;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 24 || 25 || 26 || 27 || 28 || 29 || 30) {

                $rootScope.payPeriod = 19;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        if ($scope.month == 10) {
            if ($scope.dateNow == 1 || 2 || 3 || 4 || 5 || 6 || 7) {

                $rootScope.payPeriod = 20;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 8 || 9 || 10 || 11 || 12 || 13 || 14) {

                $rootScope.payPeriod = 21;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 15 || 16 || 17 || 18 || 19 || 20 || 21) {

                $rootScope.payPeriod = 22;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 22 || 23 || 24 || 25 || 26 || 27 || 28) {

                $rootScope.payPeriod = 23;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 29 || 30 || 31) {

                $rootScope.payPeriod = 24;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        if ($scope.month == 11) {
            if ($scope.dateNow == 1 || 2 || 3 || 4) {

                $rootScope.payPeriod = 24;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 5 || 6 || 7 || 8 || 9 || 10 || 11) {

                $rootScope.payPeriod = 25;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 12 || 13 || 14 || 15 || 16 || 17 || 18) {

                $rootScope.payPeriod = 26;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 19 || 20 || 21 || 22 || 23 || 24 || 25) {

                $rootScope.payPeriod = 27;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 26 || 27 || 28 || 29 || 30) {

                $rootScope.payPeriod = 28;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        if ($scope.month == 12) {
            if ($scope.dateNow == 1 || 2) {

                $rootScope.payPeriod = 29;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)

            }
            if ($scope.dateNow == 3 || 4 || 5 || 6 || 7 || 8 || 9) {

                $rootScope.payPeriod = 30;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 10 || 11 || 12 || 13 || 14 || 15 || 16) {

                $rootScope.payPeriod = 31;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 17 || 18 || 19 || 20 || 21 || 22 || 23) {

                $rootScope.payPeriod = 32;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
            if ($scope.dateNow == 24 || 25 || 26 || 27 || 28 || 29 || 30) {

                $rootScope.payPeriod = 33;
                console.log("$rootScope.payPeriod", $rootScope.payPeriod)


            }
        }
        $scope.closePayPeriodUpdatedPage = function () {

            $scope.payPeriodUpdated = false;
            $scope.clientsPage = false;
            $scope.employeePage = false;
            $scope.payslipPageOpen = false;
            $scope.employeeListOpen = false
            $scope.managementPage = true;

        }
        Auth.getUser().then(function (data) {
            console.log(data)
            if ($scope.month == 5 && $scope.dateNow == 29) {
                /* User.updatePayPeriod(data.data.payperiod, data.data.username).then(function (data) {
                    console.log(data)
                    $rootScope.payPeriod= data.data.user.payperiodnum
                    console.log($rootScope.payPeriod)
                })
                */
            }

        })
        /* $rootScope.$on('$routeChangeStart', function () {
 
            console.log(Auth.isLoggedIn())
            console.log(AuthToken.getToken())
            Auth.getUser().then(function (data) {
                console.log(data)
                $scope.username = data.data.username;
                $scope.payperiod = data.data.payperiod
                console.log("username", username, "payperiod", payperiod)
 
                User.updatePayPeriod(data.data.payperiod, data.data.username).then(function (data) {
                    console.log(data)
                    // $rootScope.loggedIn = Auth.isLoggedIn()
                })
 
            })
 
        })
*/

        Client.getClients().then(function (data) {

            console.log(data)
            $scope.clients = data.data.clients;
            console.log($scope.clients)
        })
        Location.getLocations().then(function (data) {

            console.log(data)
            $scope.locations = data.data.location;
        })
        Supervisor.getSupervisors().then(function (data) {

            console.log(data)
            $scope.supervisors = data.data.supervisors;
            console.log($scope.supervisors[0]._id)
        })

        $scope.openGeneratePaySlipPage = function () {
            $scope.generatePaySlipPageOpen = true;
            $scope.historyPageOpen = false;
            $scope.incompletePayPeriodPageOpen = false;
            $scope.chartsPageOpen = false;
            $scope.employeesForPaySlipGeneration = [];
            User.getUsers().then(function (data) {
                console.log(data)
                $scope.employeesForPaySlipGeneration = data.data.users;
            })

        }
        /*   $scope.openIndividualDelinquentTimeSheet = function(){
               
               if($scope.timesheetEntryOpen){
                   $scope.timesheetEntryOpen  = false;
               }else{
                   $scope.timesheetEntryOpen = true;
               }
           }*/

        $scope.openIndividualDelinquentTimeSheet = function (index, timesheetData) {
            console.log(index)
            console.log(timesheetData)
            //console.log($scope.timesheet)
            //curHistory = index;
            // $scope.showChart = false;
            //$timeout(function(){
            //$scope.removeChart = true;
            if ($scope.timesheetEntryOpen && index !== $scope.curTimesheet
            ) {
                // $scope.individualPayPeriodOpen = false;
                $scope.curTimesheet = index;
                console.log("first")
                // console.log($scope.timesheet)
                console.log($scope.timesheetEntryOpen)

            }


            else if (!$scope.timesheetEntryOpen && index == $scope.curTimesheet) {
                $scope.timesheetEntryOpen = true;
                console.log("second")
                console.log($scope.timesheetEntryOpen)
                //$scope.curPeriod = index;
            }
            else if (!$scope.timesheetEntryOpen && index !== $scope.curTimesheet) {
                console.log("third")
                $scope.timesheetEntryOpen = true;
                console.log($scope.timesheetEntryOpen)
                $scope.curTimesheet = index;
            } else {
                console.log("last")
                $scope.curTimesheet = null

                // $scope.showChart = true;
                //$scope.removeChart = false;
            }
            // },500)
        }

        $scope.openIndividualHistoryEntry = function (index) {
            console.log(index)
            //curHistory = index;
            $scope.showChart = false;
            $timeout(function () {
                $scope.removeChart = true;
                if ($scope.historyEntryOpen && index !== $scope.curHistory
                ) {
                    // $scope.individualPayPeriodOpen = false;
                    $scope.curHistory = index;
                    console.log("first")

                }


                else if (!$scope.historyEntryOpen && index == $scope.curHistory) {
                    $scope.historyEntryOpen = true;
                    console.log("second")
                    //$scope.curPeriod = index;
                }
                else if (!$scope.historyEntryOpen && index !== $scope.curHistory) {
                    console.log("third")
                    $scope.historyEntryOpen = true;
                    $scope.curHistory = index;
                } else {
                    $scope.curHistory = null

                    $scope.showChart = true;
                    $scope.removeChart = false;
                }
            }, 500)
        }
        $scope.openIndividualPayPeriod = function (index) {
            console.log(index)


            if ($scope.individualPayPeriodOpen && index !== $scope.curPeriod
            ) {
                // $scope.individualPayPeriodOpen = false;
                $scope.curPeriod = index;
                console.log("first")

            }


            else if (!$scope.individualPayPeriodOpen && index == $scope.curPeriod) {
                $scope.individualPayPeriodOpen = true;
                console.log("second")
                //$scope.curPeriod = index;
            }
            else if (!$scope.individualPayPeriodOpen && index !== $scope.curPeriod) {
                console.log("third")
                $scope.individualPayPeriodOpen = true;
                $scope.curPeriod = index;
            } else {
                $scope.curPeriod = null
                $scope.showChart = true;
            }
        }
        $scope.openIncompletePayPeriodPage = function () {
            $scope.incompletePayPeriodPageOpen = true;
            $scope.chartsPageOpen = false;
            $scope.historyPageOpen = false;
            $scope.generatePaySlipPageOpen = false;
        }
        $scope.openHistoryPage = function () {
            $scope.generalHistoryTitle =true;
            $scope.personalHistoryTitle = false;
            $scope.historyPageOpen = true;
            $scope.chartsPageOpen = false;
            $scope.personalHistoryOpen = false;
            $scope.generatePaySlipPageOpen = false;
            $scope.loadingGeneralHistory = true;
            $scope.loadingPersonalHistory= false;
            $scope.showChart = true;
            $scope.generalHistoryOpen = true;
            console.log($scope.generalHistoryOpen)
            $scope.incompletePayPeriodPageOpen = false;
            //$scope.employeesPaginated = [];
            $scope.employeesForHistory = [];
            $scope.pageLimit = 0;
            //$scope.pageArray=[];
            if($scope.usersLoaded){

                                   for (var i = 0; i <= $scope.employees.length; i++) {

                            var page = 0;
                            console.log($scope.pageLimit, i, $scope.employees.length)
                            console.log($scope.employees)
                            // var pageLimit = 4;//3i
                            if (i < $scope.pageLimit) {
                                console.log("its less")

                            }
                            if (i < $scope.employees.length) {
                                console.log("yup,less")
                            }

                            if (i < $scope.pageLimit && i < $scope.employees.length) {//5
                                console.log("HELLO")
                                console.log($scope.employees[i])
                                console.log($scope.pageLimit, i, $scope.employees.length)
                                if ($scope.employees[i]) {
                                    $scope.employeesForHistory.push($scope.employees[i])
                                    console.log(i)
                                    console.log("firstCondiation")
                                    console.log($scope.pageArray)

                                }



                            } else {
                                if (!$scope.usersLoaded) {

                                    console.log("else")
                                    //console.log($scope.pageArray)
                                    $scope.loadingUsers = false;
                                    $scope.employeesPaginated.push($scope.employeesForHistory)
                                    console.log($scope.employeesPaginated)
                                    $scope.employeesForHistory = [];
                                    if ($scope.employees[i] !== undefined) {
                                        $scope.employeesForHistory.push($scope.employees[i])
                                    }
                                    //console.log(pageLimit)
                                    $scope.pageLimit = $scope.pageLimit + 4;
                                    console.log($scope.pageLimit, i, $scope.employees.length)

                                    page++

                                }

                            }

                        }
                        $scope.loadingGeneralHistory = false;
            }else{
            User.getUsers().then(function (data) {
                console.log(data)
                for (var z = 0; z < data.data.users.length; z++) {

                    $scope.employeesForHistory.push(data.data.users[z])
                    $scope.loadingGeneralHistory = false;
                }
                for (var i = 0; i <= $scope.employeesForHistory.length; i++) {

                    var page = 0;
                    // var pageLimit = 4;
                    console.log($scope.pageLimit)
                    if (i < $scope.pageLimit && i < $scope.employeesForHistory.length) {
                        if ($scope.employeesForHistory[i]) {
                            $scope.pageArray.push($scope.employeesForHistory[i])
                            console.log(i)
                            console.log("firstCondiation")
                            console.log($scope.pageArray)

                        }


                    } else {
                        if (!$scope.usersLoaded) {

                            console.log("else")
                            console.log($scope.pageArray)
                            //$scope.employeesPaginated=[]
                            $scope.loadingUsers = false;
                            $scope.employeesPaginated.push($scope.pageArray)
                            console.log($scope.employeesPaginated)

                            $scope.pageArray = [];
                            //console.log(pageLimit)
                            $scope.pageLimit = $scope.pageLimit + 4;

                            page++

                        }

                    }

                }
                $scope.employeesPaginated.push($scope.pageArray)
            })
            }

        }
        $scope.openChartsPage = function () {
            $scope.chartsPageOpen = true;
            $scope.historyPageOpen = false;

            $scope.incompletePayPeriodPageOpen = false;


        }
        $scope.finishSubmitTimesheet = function (decision) {
            console.log(decision)
            console.log($scope.delinquentJobDetails)
            $scope.loadingAddAndRemoveDelinquentTimeSheet = true;
            User.addJobToCurrentPayPeriod($scope.delinquentJobDetails).then(function (data) {
                console.log(data)
                if (data.data.success) {
                    $scope.loadingAddAndRemoveDelinquentTimeSheet = false;
                    $scope.areYouSure = false;
                    $scope.openEmployeeList()
                } else {

                }
            })
            if (decision == "yes") {
                $scope.areYouSure = false;

            } else {
                $scope.areYouSure = false;
            }
        }
        $scope.submitTimeSheet = function (timesheet) {
            console.log($scope.timeData)
            console.log(timesheet)
            $scope.delinquentJobDetails = timesheet;

            console.log($scope.areYouSure)
            $scope.minVarOut = "";
            $scope.minVarIn = "";
            $scope.hrVarOut = "";
            $scope.hrVarIn = "";

            if ($scope.timeData.hrsIn1 !== null && $scope.timeData.hrsIn2 !== null &&
                $scope.timeData.minsIn1 !== null && $scope.timeData.minsIn2 !== null
                && $scope.timeData.amPm1 !== null
                && $scope.timeData.hrsOut1 !== null
                && $scope.timeData.hrsOut2 !== null
                && $scope.timeData.minOut2 !== null
                && $scope.timeData.minsOut2 !== null
                && $scope.timeData.amPm2 !== null) {
                $scope.minVarOut = $scope.timeData.minsOut1 + $scope.timeData.minsOut2 + $scope.timeData.amPm2
                $scope.minVarIn = "" + $scope.timeData.minsIn1 + $scope.timeData.minsIn2 + $scope.timeData.amPm1
                $scope.hrVarOut = $scope.timeData.hrsOut1 + $scope.timeData.hrsOut2
                $scope.hrVarIn = $scope.timeData.hrsIn1 + $scope.timeData.hrsIn2
                $scope.delinquentJobDetails.timeout = $scope.hrVarOut + ":" + $scope.minVarOut
                $scope.delinquentJobDetails.timein = $scope.hrVarIn + ":" + $scope.minVarIn
                $scope.delinquentJobDetails.payperiodnum = $rootScope.payPeriod;
                $scope.delinquentJobDetails.user = $scope.currentUserFile;
                $scope.delinquentJobDetails.timesheetSubmitted = true;
                console.log($scope.hrVarOut)
                console.log($scope.hrVarIn)
                console.log($scope.minVarOut)
                console.log($scope.minVarIn)
                console.log($scope.timeData)
                $scope.areYouSure = true;
                console.log($scope.areYouSure)

            } else {
                console.log("null")
            }
        }
        $scope.createClient = function () {
            Client.create("Displayworks").then(function (data) {
                console.log(data);

            })
        }
        $scope.createLocation = function () {
            Location.create("Sky City").then(function (data) {
                // console.log(data.data.);
            })
        }
        $scope.createSupervisor = function () {
            Supervisor.create("Benjamin").then(function (data) {
                console.log(data);
            })
        }

        $scope.sendTimeSheetReminderText = function(date,userData){
console.log(userData
)
$scope.loadingText = true;
            var userDetails = {}
            userDetails.name = userData.jobDetails[0].currentuser
              User.findUser(userData.jobDetails[0].currentuser).then(function (data) {
                        console.log(data.data.user.payperiodnum)
                      
                      userDetails.phonenumber =  data.data.user[0].phonenumber
                      userDetails.from = "Hannah @ QLH"
                      userDetails.text = "Just, a reminder that you're timesheet for "+userData.jobDetails[0].date+" (Benjamin @ SkyCity), has not been submitted, please submit by Sunday Evening, or it will be placed on a later pay period. Thanks...-Hannah @ QLH."
                      User.sendSms(userDetails).then(function(data){
                          if(data.data.success){
                              $scope.loadingText = false;
                              console.log(data)
                          }
                      })
})
        }
        $scope.addJobData = function (date, day, fulldate, index) {
            $scope.loadingNewJob = true;
            $scope.jobData.booked = true;
            $scope.jobData.timesheetSubmitted = false;
            $scope.jobData.dateNum = date;
            $scope.jobData.date = fulldate;
            $scope.jobData.day = day;
            $scope.jobData.payperiodIndex = index;
            $scope.jobData.currentuser = $scope.currentUserFile;
            User.addJob($scope.jobData).then(function (data) {
                console.log(data)
                if (data.data.success) {
                    // $timeout(function(){
                    //$location.path('/management')

                    User.findUser($scope.currentUserFile).then(function (data) {
                        console.log(data.data.user.payperiodnum)
                        for (var z = 0; z < data.data.user[0].payperiods.length; z++) {
                            if (data.data.user[0].payperiods[z].payperiodnum == data.data.user[0].payperiodnum) {
                                console.log(data.data.user[0].payperiods[z].jobDetails)
                                $scope.jobDetails = data.data.user[0].payperiods[z].jobDetails;
                            }
                        }
                              var userDetails = {}
            var date = $scope.jobData.date;
            var location = $scope.jobData.location
            var client = $scope.jobData.client
           
                console.log(data)
                userDetails.phonenumber =data.data.user[0].phonenumber
                userDetails.from = "Hannah @ QLH"
                userDetails.text = "You've been booked for "+date+" @ "+location+" for "+client+". Please text to confirm..."
                User.sendSms(userDetails).then(function(data){
                    console.log(data)
                    //var userDetails = {}
                     // userDetails.phonenumber =data.data.user[0].phonenumber
                //userDetails.from = "Hannah @ QLH"
                    userDetails.text = $scope.jobData.notes;
                    User.sendSms(userDetails).then(function(data){
                        console.log(data)
                    })
                })
            
                        $scope.loadingNewJob = false;
                        $scope.addJobPageOpen = false;
                        $scope.jobsPageOpen = true;

                    })
                    //$scope.openJobsPage()
                    /*$scope.jobsPageOpen= false;
                    $scope.addJobPage = false
                    $scope.employeesPage = true;
                    $scope.employeeListOpen =true;
                    $scope.jobsPageOpen = true;
                    */

                    //},2000)


                }
            })
            console.log(index)

            console.log($scope.jobData)
        }
        $scope.openAddJobPage = function (job) {
            console.log(job)
            var userDetails = {}
            var date = job.date;
            var location = job.location
            var client = job.client
            User.findUser(job.currentuser).then(function(data){
                console.log(data)
                userDetails.phonenumber =data.data.user[0].phonenumber
                userDetails.from = "Hannah @ QLH"
                userDetails.text = "You've been booked for "+date+" @ "+location+" for "+client+". Please text to confirm..."
                User.sendSms(userDetails).then(function(data){
                    console.log(data)
                })
            })
            if (!$scope.addJobPage) {
                $scope.addJobPageOpen = true;
                $scope.jobsPageOpen = false;
            }

        }
        $scope.export = function () {

            $scope.pdfLoading = true;
            $timeout(function () {
                $scope.pdfLoading = false;
            }, 2000)
            console.log('clicked')
            var doc = new jsPDF()
            doc.getFontList();
            doc.text($scope.currentUserFile, 10, 10)
            doc.setFontSize(10)
            doc.text("Casual Labourer", 10, 20)
            doc.text($scope.currentUserPhoneNumber, 10, 30)
            doc.text("Quality Labour Hire Ltd.", 10, 60)

            doc.addImage($scope.qlhLogo, 'JPG', 180, 15, 15, 15);

            doc.save('a4.pdf')
            doc.addFont('Raleway', 'Raleway', 'normal');

        }
        $scope.generatePdf = function () {

            User.generatePdf().then(function (data) {
                console.log(data)
            })
        }

        User.getUsers().then(function (data) {
            console.log(data)
            $scope.employees = data.data.users;


            console.log($scope.employees)

            // $scope.loadingUsers=false;
            console.log($scope.employeesPaginated)
            $scope.jobDetails = data.data.users.jobDetails;

            console.log(data)
            $scope.employees = data.data.users
            for (var i = 0; i <= $scope.employees.length; i++) {

                var page = 0;
                console.log($scope.pageLimit, i, $scope.employees.length)
                console.log($scope.employees)
                // var pageLimit = 4;//3i
                if (i < $scope.pageLimit) {
                    console.log("its less")

                }
                if (i < $scope.employees.length) {
                    console.log("yup,less")
                }

                if (i < $scope.pageLimit && i < $scope.employees.length) {//5
                    console.log("HELLO")
                    console.log($scope.employees[i])
                    console.log($scope.pageLimit, i, $scope.employees.length)
                    if ($scope.employees[i]) {
                        $scope.pageArray.push($scope.employees[i])
                        console.log(i)
                        console.log("firstCondiation")
                        console.log($scope.pageArray)

                    }



                } else {
                    if (!$scope.usersLoaded) {

                        console.log("else")
                        console.log($scope.pageArray)
                        $scope.loadingUsers = false;
                        $scope.employeesPaginated.push($scope.pageArray)
                        console.log($scope.employeesPaginated)
                        $scope.pageArray = [];
                        if ($scope.employees[i] !== undefined) {
                            $scope.pageArray.push($scope.employees[i])
                        }
                        //console.log(pageLimit)
                        $scope.pageLimit = $scope.pageLimit + 4;
                        console.log($scope.pageLimit, i, $scope.employees.length)

                        page++

                    }

                }

            }


            $scope.usersLoaded = true;
            console.log("$scope.usersLoaded", $scope.usersLoaded)
            $scope.loadingUsers = false;


            for (var i = 0; i < data.data.users.length; i++) {
                if (data.data.users[i].name == $scope.currentUserFile) {
                    data.data.users[i].jobDetails = $scope.jobDetails;
                    data.data.users[i].comments = $scope.comments;
                }
                if ($scope.employees[i].payperiodnum !== $rootScope.payPeriod) {
                    $scope.newPayPeriodObject.newpayperiod = $rootScope.payPeriod

                    User.changeUserPayPeriod($scope.newPayPeriodObject).then(function (data) {
                        console.log(data)
                        if (data.data.success) {
                            $scope.payPeriodUpdated = true;
                            //$timeout(function(){
                            //    $scope.payPeriodUpdated = false;
                            //},)
                        }
                        //         $scope.addPayPeriodToPayPeriodHistory($scope.allEmployeesJobDetails)

                    })
                }
            }
            console.log($scope.jobDetails)
            console.log($scope.comments)
        })


        // console.log($scope.searchForm.searchInput.$pristine)

        $scope.closeSearchResults = function () {
            console.log("clicked")
            $scope.searchResults = false;
            $scope.page = 0;
            $scope.userList = true;
        }
        $scope.changePage = function () {
            $scope.page++
            console.log($scope.page)
        }
        $scope.decreasePage = function () {
            if ($scope.page > 0) {
                $scope.page--
                console.log($scope.page)
            }

        }
        $scope.specificPage = function (page) {
            $scope.page = page;
        }
        $scope.lastPage = function () {
            $scope.page = 0;
        }
        $scope.firstPage = function () {
            $scope.page = $scope.employeesPaginated.length - 1;
        }
        $scope.searchFunction = function (input) {
            $scope.loading = true;
            console.log(input.$viewValue)
            if (input.$viewValue != "") {
                $scope.loading = false;
                User.instaSearch(input.$viewValue).then(function (data) {
                    console.log(data.data.users.length)
                    if (data.data.users.length == 0) {
                        $scope.searchResults = false;
                        $scope.noSearchResults = true;
                        $scope.noInput = false;
                        $timeout(function () {
                            $scope.noSearchResults = false;
                        }, 3000)
                    } else {
                        console.log("dog")
                        $scope.loading = false;
                        $scope.userList = false;
                        $scope.userSearchResults = data.data.users
                        console.log($scope.userSearchResults)
                        $scope.searchResults = true;
                        $scope.noInput = false;
                        $scope.noSearchResults = false;
                        $timeout(function () {

                        }, 3000)
                    }
                })
            } else {
                $scope.loading = false;
                $scope.noInput = true;
                $scope.noSearchResults = false;
                $scope.searchResults = false;
                console.log("y")
                $timeout(function () {
                    $scope.noInput = false;
                }, 3000)
            }


        }



        /* PAYSLIP LOGIC */

        $scope.addPayPeriodToPayPeriodHistory = function (details) {
            console.log(details)
            //$scope.employeeJobDetails.allEmployeesJobDetails = details;
            $scope.employeeJobDetails.payperiod = $rootScope.payPeriod;
            $scope.allEmployeesJobDetails =[]
            User.getUsers().then(function(data){                                                    



                for(var d=0; d<data.data.users.length;d++){

                     for (var k = 0; k < data.data.users[d].payperiods.length; k++) {

                            if (data.data.users[d].payperiods[0].payperiodnum == $rootScope.payPeriod) {


                                   $scope.nameObject = {}
                            $scope.nameObject.name = $scope.employees[d].name
                            data.data.users[d].payperiods[0].jobDetails.push($scope.nameObject)
                            $scope.allEmployeesJobDetails.push(data.data.users[d].payperiods[0].jobDetails)
                        }
                        
                     }
                      $scope.employeeJobDetails.allEmployeesJobDetails = $scope.allEmployeesJobDetails;
                      console.log($scope.allEmployeesJobDetails)
                    $scope.payPeriodHistory = data.data.users[d].payperiodhistory
                    console.log($scope.payPeriodHistory)
                    for(var z=0; z<$scope.employeeJobDetails.allEmployeesJobDetails.length;z++ ){
                            //$scope.data

                            // $scope.data[0][b]= hoursIterator;


                                  for(var x=0;x<$scope.employeeJobDetails.allEmployeesJobDetails[z].length;x++){
                                      
                    var startTime = moment($scope.employeeJobDetails.allEmployeesJobDetails[z][x].timein, "HH:mm:ss a");
                                var endTime = moment($scope.employeeJobDetails.allEmployeesJobDetails[z][x].timeout, "HH:mm:ss a");
                                var duration = moment.duration(endTime.diff(startTime));
                                var hours = parseInt(duration.asHours());
                                var minutes = parseInt(duration.asMinutes()) - hours * 60;
                                console.log(hours)
                                console.log(minutes)
                                //hoursIterator = hoursIterator + hours;
                                //minIterator = minIterator + minutes
                                if (minutes == 15) {
                                    hours + .25
                                    minIterator = 0;
                                }
                                if (minutes == 30) {
                                    hours + .30
                                }
                                if (minutes == 45) {
                                    hours + .75
                                }
                                               $scope.employeeJobDetails.allEmployeesJobDetails[z][x].hoursCalculated = hours+minutes;

                            }
                            }
                          
                
               console.log($scope.employeeJobDetails)
            

                }
                 User.addPayPeriodToPayPeriodHistory($scope.employeeJobDetails).then(function (data) {

              console.log(data)
           })
   
            })
            
        

        }
        //$scope.addPayPeriodToPayPeriodHistory($scope.allEmployeesJobDetails)
        $scope.openPayslipPage = function () {

            $scope.payslipPageOpen = true;
            $scope.payslipPageSelected = true;
            $scope.employeePage = false;
            $scope.managementPage = false;
            $scope.employeesPage = false;
            $scope.clientsPage = false;
            $scope.allEmployeesJobDetails = [];

            if($scope.usersLoaded){

            }else{

            }

            User.getUsers().then(function (data) {
                //console.log(data)

                $scope.employees = data.data.users;
                $scope.payPeriod = $scope.employees[0].payperiodnum
                $scope.report = {};
                $scope.reportArray = [];
                $scope.nameArray = []
                $scope.dateArray = []
                $scope.timeArray = []
                $scope.jobDetailArray = [];
                $scope.hourIterator = 0;
                $scope.minIterator = 0;
                $scope.hoursArray = [];
                $scope.timeObject = {};
                $scope.nameVar = ""


                for (var z = 0; z < $scope.employees.length; z++) {
                    // console.log($scope.employees[z].payperiods)
                    //$scope.report = {};
                    var curUser = $scope.employees[z].name
                    console.log($scope.nameArray.length,$scope.employees[z].name)
                    if ($scope.nameArray.length > 0) {
                                                        console.log("HELLOooooooooooooooooooooooooo")

                        $scope.report.name = $scope.nameArray;
                        if ($scope.dateArray.length > 0) {
                            $scope.report.date = $scope.dateArray
                            if ($scope.jobDetailArray.length > 0) {
                                $scope.report.jobDetails = $scope.jobDetailArray
                                $scope.report.payperiod = $scope.employees[z].payperiodnum;
                            }
                        }
                        console.log("HELLOooooooooooooooooooooooooo")
                        console.log("$scope.report", $scope.report)
                        if ($scope.employees[z].payperiodnum == $rootScope.payPeriod) {
                            //User.addDelinquentTimeSheet($scope.report).then(function (data) {
                            //    console.log(data)

                            //})
                        }

                        $scope.reportArray.push($scope.report)
                        
                        console.log("$scope.reportArray", $scope.reportArray)
                        $scope.incompletePayPeriod = true;

                        //$scope.reportArray.push($scope.nameArray)
                    }

                    $scope.nameArray = []
                    $scope.dateArray = []
                    $scope.jobDetailArray = []
                    $scope.report = {}



                    /*changed*/
                  // for (var d = 0; d < $scope.employees[z].payperiods.length; d++) {

                        if ($scope.employees[z].payperiods[0].payperiodnum == $scope.payPeriod) {

                            //console.log($scope.employees[z].payperiods[d].payperiodnum)
                            //console.log(z)
                            $scope.nameObject = {}
                            $scope.nameObject.name = $scope.employees[z].name
                            $scope.employees[z].payperiods[0].jobDetails.push($scope.nameObject)
                            $scope.allEmployeesJobDetails.push($scope.employees[z].payperiods[0].jobDetails)
                            //for(var s = 0; s <$scope.allEmployeesJobDetails[z].length)
                            //console.log($scope.allEmployeesJobDetails)
                            $scope.payPeriodStartDate = $scope.allEmployeesJobDetails[0][0].date;
                            $scope.payPeriodEndDate = $scope.allEmployeesJobDetails[0][6].date;

                        }


                   // }

                    //console.log($scope.allEmployeesJobDetails)

                    for (var s = 0; s < $scope.allEmployeesJobDetails.length; s++) {
                        //console.log(s)

                        for (k = 0; k < $scope.allEmployeesJobDetails[s].length; k++) {


                                       // console.log($scope.allEmployeesJobDetails[s][k])
                            

                                if (!$scope.allEmployeesJobDetails[s][k].timesheetSubmitted && $scope.allEmployeesJobDetails[s][k].booked) {
                                    console.log($scope.allEmployeesJobDetails[s][k])
                                    //console.log("Hello")
                                    //if (curUser == $scope.allEmployeesJobDetails[s][k].currentuser) {

                                    //console.log(z)
                                    $scope.nameArray.push($scope.employees[z].name)
                                    $scope.dateArray.push($scope.allEmployeesJobDetails[s][k].date)
                                    $scope.jobDetailArray.push($scope.allEmployeesJobDetails[s][k])
                                    console.log($scope.nameArray)
                                    // $scope.payPeriod.push()
                                    //console.log($scope.nameArray[$scope.nameArray.length - 1], $scope.employees[z].name)
                                    //console.log("hello", $scope.nameArray)
                                    //console.log("hello", $scope.dateArray)
                                    // }
                                } else if (!$scope.allEmployeesJobDetails[s][k].timesheetSubmitted && $scope.allEmployeesJobDetails[s][k].booked && $scope.allEmployeesJobDetails[s][k].currentuser !== $scope.employees[z].name) {

                                }

                                console.log($scope.nameArray.length)


                            if ($scope.allEmployeesJobDetails[s][k].timesheetSubmitted !== undefined) {
                                //$scope.employees[z].name
                                if ($scope.allEmployeesJobDetails[s][k].timesheetSubmitted && $scope.allEmployeesJobDetails[s][7].name == "ohrha harho" && $scope.employees[z].name == "ohrha harho") {
                                /*    //console.log("Wet got the time", $scope.allEmployeesJobDetails[s][k])
                                    $scope.timeObject.name = $scope.allEmployeesJobDetails[s][7].name;
                                    $scope.timeArray.push([$scope.allEmployeesJobDetails[s][k].timein, $scope.allEmployeesJobDetails[s][k].timeout])
                                    // console.log($scope.timeArray)
                                    var startTime = moment($scope.allEmployeesJobDetails[s][k].timein, "HH:mm:ss a");
                                    var endTime = moment($scope.allEmployeesJobDetails[s][k].timeout, "HH:mm:ss a");
                                    var duration = moment.duration(endTime.diff(startTime));
                                    var hours = parseInt(duration.asHours());
                                    var minutes = parseInt(duration.asMinutes()) - hours * 60;
                                    $scope.hoursArray.push([hours, minutes])


                                    $scope.timeObject.time = $scope.timeArray;
                                    // console.log($scope.timeObject)
                                /*  
                                  for (var g = 0; g < $scope.allEmployeesJobDetails[s].length; g++) {
                                        //console.log($scope.allEmployeesJobDetails[s][g].timein)
                                        // console.log($scope.allEmployeesJobDetails[s][g].timeout)
                                        if ($scope.allEmployeesJobDetails[s][g].timein !== undefined && $scope.allEmployeesJobDetails[s][g].timeout !== undefined && $scope.allEmployeesJobDetails[s][7].name == "ohrha ahrho") {

                                            var startTime = moment($scope.allEmployeesJobDetails[s][g].timein, "HH:mm:ss a");
                                            var endTime = moment($scope.allEmployeesJobDetails[s][g].timeout, "HH:mm:ss a");
                                            var duration = moment.duration(endTime.diff(startTime));
                                            var hours = parseInt(duration.asHours());
                                            var minutes = parseInt(duration.asMinutes()) - hours * 60;
                                            alert(hours + ' hour and ' + minutes + ' minutes.')

                                             var result = endTime.diff(startTime, 'hours') + " Hrs and " +
                                                endTime.diff(startTime, 'minutes') + " Mns";
                                            alert(result)
                                            

                               }

                                    }
*/


                                }

                                /* DISCOVER USERS WHOSE TIMESHEETS HAVEN'T BEEN SUBMITTED */


                           
                                /* DISCOVER USERS WHOSE TIMESHEETS HAVEN'T BEEN SUBMITTED */


                            }
                            console.log($scope.nameArray.length)
                          /*  if (!$scope.allEmployeesJobDetails[s][k].timesheetSubmitted && $scope.allEmployeesJobDetails[s][k].date !== undefined && $scope.allEmployeesJobDetails[s][k].currentuser == $scope.employees[z].name) {

                                if ($scope.allEmployeesJobDetails[s][k].currentuser !== undefined && $scope.allEmployeesJobDetails[s][k].currentuser == $scope.employees[z].name) {

                                }
                                if ($scope.allEmployeesJobDetails[s][k].date !== undefined && $scope.allEmployeesJobDetails[s][k].currentuser == $scope.employees[z].name) {

                                }

                                $scope.nameVar = $scope.allEmployeesJobDetails[s][k].currentuser
                            }
*/
                            $scope.report = {};



                        }
                        // console.log($scope.hoursArray)


                    }
                    console.log($scope.nameArray.length,$scope.employees[z].name)
                      if ($scope.nameArray.length > 0) {
                                                        console.log("HELLOooooooooooooooooooooooooo")

                        $scope.report.name = $scope.nameArray;
                        if ($scope.dateArray.length > 0) {
                            $scope.report.date = $scope.dateArray
                            if ($scope.jobDetailArray.length > 0) {
                                $scope.report.jobDetails = $scope.jobDetailArray
                                $scope.report.payperiod = $scope.employees[z].payperiodnum;
                            }
                        }
                        console.log("HELLOooooooooooooooooooooooooo")
                        console.log("$scope.report", $scope.report)
                        if ($scope.employees[z].payperiodnum !== $rootScope.payPeriod) {
                            User.addDelinquentTimeSheet($scope.report).then(function (data) {
                              console.log(data)

                        })
                        }
                      }
                    var nameVar = $scope.employees[z].name;
                    // console.log($scope.reportArray)
                   /* if ($scope.employees[z].payperiodnum == $rootScope.payPeriod) {
                        $scope.newPayPeriodObject.newpayperiod = $rootScope.payPeriod

                        User.changeUserPayPeriod($scope.newPayPeriodObject).then(function (data) {
                            console.log(data)
                            $scope.addPayPeriodToPayPeriodHistory($scope.allEmployeesJobDetails)

                        })
                    }
                    */
                }
                /* if($scope.employees[z].payperiodnum !== $rootScope.payPeriod){
                     $scope.allEmployeesJobDetails.historyupdated = false;
                     $scope.allEmployeesJobDetails.newpayperiod = $rootScope.payPeriod
                     $scope.addPayPeriodToPayPeriodHistory($scope.allEmployeesJobDetails)
                 }*/



                //console.log("$scope.allEmployeesJobDetails", $scope.allEmployeesJobDetails)
           /*     for (var t = 0; t < $scope.hoursArray.length; t++) {
                    //for(var x = 0; x<$scope.hoursArray[t].length; x++){
                    $scope.hourIterator = $scope.hourIterator + $scope.hoursArray[t][0];
                    $scope.minIterator = $scope.minIterator + $scope.hoursArray[t][1]
                    if ($scope.minIterator == 60) {
                        $scope.minIterator = 0;
                        $scope.hourIterator++
                    }
                    if ($scope.minIterator == 15) {
                        $scope.minIterator = 25;
                    }
                    if ($scope.minIterator == 30) {
                        $scope.minIterator = 50;

                    }
                    if ($scope.minIterator == 45) {
                        $scope.minIterator = 75;

                    }

                    //console.log($scope.hourIterator)
                    $scope.hoursWorked = $scope.hourIterator
                    $scope.finalHours = String($scope.hoursWorked) + "." + String($scope.minIterator)

                    ///console.log($scope.minIterator)

                    // }
                }
                */
                if ($scope.minIterator >= 45) {
                }
                $scope.exportPdf = function () {

                    $scope.pdfLoading = true;
                    $timeout(function () {
                        $scope.pdfLoading = false;
                    }, 2000)
                    console.log('clicked')
                    var doc = new jsPDF()
                    doc.getFontList();
                    doc.text($scope.currentUserFile, 10, 10)
                    doc.setFontSize(10)
                    doc.text("Casual Labourer", 10, 20)
                    doc.text($scope.currentUserPhoneNumber, 10, 30)
                    doc.text("Quality Labour Hire Ltd.", 10, 60)
                    doc.text("Pay Period:", 10, 70)
                    doc.text($scope.payPeriodStartDate, 30, 70)
                    doc.text($scope.payPeriodEndDate, 46, 70)
                    doc.text("Payed On:", 10, 75)
                    doc.text($scope.payPeriodEndDate, 30, 75)
                    doc.text("Tax Code:", 10, 80)
                    doc.text("M", 30, 80)
                    doc.setFontSize(13)

                    doc.text("Taxable Earnings", 10, 90)
                    doc.text("Rate", 120, 90)
                    doc.text("Hours", 150, 90)
                    doc.text("Amount", 170, 90)
                    doc.setFontSize(10)
                    doc.text("Oridinary Time", 10, 100)
                    doc.text("Oridinary Time", 120, 100)
                    doc.text(String($scope.finalHours), 150, 100)
                    doc.text("Oridinary Time", 170, 100)



                    doc.addImage($scope.qlhLogo, 'JPG', 180, 15, 15, 15);

                    doc.save('a4.pdf')
                    doc.addFont('Raleway', 'Raleway', 'normal');

                }
                //$scope.exportPdf()
            })

        }

        $scope.openPayslipGenerationPage = function () {
            $scope.payslipGenerationOpen = true;
            $scope.commentsPageOpened = false;
            $scope.bookedJobsPageOpened = false;
            $scope.complaintsPageOpened = false;
            $scope.userDetailsPageOpened = false;




        }



        /*PAYSLIP LOGIC */





        $scope.openDisputesPage = function (index) {
            $scope.usersPageIndex = index;
            if (!$scope.disputesPageOpen) {
                $scope.jobsPageOpen = false;
                $scope.disputesPageOpen = true;
                $scope.timesheetsPageOpen = false;
                $scope.timesheetsSelected = false;
                $scope.payslipGenerationOpen = false;

                $scope.jobsSelected = false;
                $scope.disputesSelected = true;
            } else {
                $scope.disputesSelected = false;

            }

        }
        $scope.increaseDay = function () {
            $scope.slideout = true;
            $scope.fadeOut = true;

            $timeout(function () {
                $scope.slideout = false;
                $scope.fadeOut = false;
                $scope.slidein = true;
                if ($scope.openJob <= 5) {

                    $scope.openJob = $scope.openJob + 1;


                } else {
                    $scope.openJob = 0;
                }
            }, 500)


            console.log($scope.openJob)
        }
        $scope.decreaseDay = function () {
            if ($scope.openJob <= 0) {
                $scope.openJob = $scope.openJob - 1;
            } else {
                $scope.openJob = 0;
            }
        }
        $scope.openDelinquentTimeSheetPage = function () {

            $scope.delinquentTimeSheetSelected = true;
            $scope.disputesSelected = false;
            $scope.timesheetsSelected = false;
            $scope.jobsSelected = false;
            $scope.complaintsSelected = false;
            $scope.delinquentTimeSheetPageOpened = true;
            $scope.userDetailsPageOpened = false;
            $scope.bookedJobsPageOpened = false;
            $scope.complaintsPageOpened = false;
            $scope.commentsPageOpened = false;

        }
        $scope.openJobsPage = function (index) {
            $scope.usersPageIndex = index;

            if (!$scope.jobsPageOpen) {
                $scope.jobsPageOpen = true;
                $scope.jobsSelected = true;
                $scope.addJobPageOpen = false;
                $scope.delinquentTimeSheetSelected = false;
                $scope.disputesSelected = false;
                $scope.timesheetsSelected = false;
                $scope.disputesPageOpen = false;
                $scope.timesheetsPageOpen = false;
                $scope.payslipGenerationOpen = false;

            } else {
                //$scope.jobsSelected = false;

            }

        }
        $scope.openTimesheetsPage = function (index) {
            $scope.usersPageIndex = index;
            $scope.openJob = index;
            if (!$scope.timesheetsPageOpen) {
                $scope.jobsPageOpen = false;
                $scope.disputesPageOpen = false;
                $scope.timesheetsPageOpen = true;
                $scope.timesheetsSelected = true;
                $scope.disputesSelected = false;
                $scope.delinquentTimeSheetSelected = false;
                $scope.payslipGenerationOpen = false;

                $scope.jobsSelected = false;
            } else {
                //$scope.timesheetsSelected = false;
            }
        }
        $scope.openCommentsPage = function (index) {
            $scope.openJob = 0;
            if ($scope.commentsSelected) {

                // $scope.commentsSelected = false;

                //$scope.commentsPageOpened = false;
            } else {

                $scope.commentsSelected = true;
                $scope.commentsPageOpened = true
                $scope.complaintsPageOpened = false;
                $scope.delinquentTimeSheetSelected = false;
                $scope.delinquentTimeSheetPageOpened = false;
                $scope.complaintsSelected = false;
                $scope.userDetailsPageOpened = false;
                $scope.payslipGenerationOpen = false;

                $scope.bookedJobsPageOpened = false;
                $scope.bookedJobsSelected = false;
                $scope.userDetailsPageOpened = false;
            }
        }
        $scope.openComplaintsPage = function () {
            $scope.openJob = 0;
            if ($scope.complaintsSelected) {
                $scope.complaintsSelected = false;
                $scope.complaintsPageOpened = false;
            } else {
                $scope.complaintsSelected = true;
                $scope.complaintsPageOpened = true;
                $scope.commentsSelected = false;
                $scope.delinquentTimeSheetPageOpened = false;
                $scope.userDetailsPageOpened = false;
                $scope.commentsPageOpened = false;
                $scope.bookedJobsPageOpened = false;
                $scope.delinquentTimeSheetSelected = false;
                $scope.payslipGenerationOpen = false;
                $scope.bookedJobsSelected = false;

            }
        }
        $scope.openBookedJobsPage = function () {

            if ($scope.bookedJobsSelected) {
                $scope.bookedJobsSelected = false;
                $scope.bookedJobsPageOpened = false;
                ;

            } else {
                $scope.bookedJobsSelected = true;
                $scope.complaintsPageOpened = false;
                $scope.bookedJobsPageOpened = true;
                $scope.delinquentTimeSheetSelected = false;
                $scope.delinquentTimeSheetPageOpened = false;
                $scope.addJobPageOpen = false;
                $scope.jobsPageOpen = true
                $scope.complaintsSelected = false;
                $scope.complaintsSelected = false;
                $scope.userDetailsPageOpened = false;
                $scope.payslipGenerationOpen = false;
                $scope.complaintsPageOpened = false;
                $scope.commentsSelected = false;
                $scope.commentsPageOpened = false;
            }
        }
        $scope.openEmployeeList = function () {

            
            $scope.delinquentTimeSheet = false;
            $scope.bookedJobsPageOpened = false;
            $scope.bookedJobsSelected = false;
            $scope.complaintsPageOpened = false;
            $scope.complaintsSelected = false;
            //$scope.employeesPaginated = [];
            if ($scope.employeeListOpen) {
                // $scope.employeeListOpen = false;
                $scope.userDetailsPageOpened = false;
                $scope.userFilePage = false;
                $scope.employeeHome= false;
                console.log($scope.employeeHome)

            } else {
                if (!$scope.usersLoaded) {
                    $scope.loadingUsers = true;
                    $scope.employeeListOpen = true;
                    $scope.delinquentTimeSheetPageOpened = false;
                    $scope.payslipGenerationOpen = false;
                    $scope.userFilePage = false;
                    $scope.userList = true;
                    $scope.pageLimit = 4

                    User.getUsers().then(function (data) {
                        console.log(data)
                        $scope.employees = data.data.users
                        for (var i = 0; i <= $scope.employees.length; i++) {

                            var page = 0;
                            console.log($scope.pageLimit, i, $scope.employees.length)
                            console.log($scope.employees)
                            // var pageLimit = 4;//3i
                            if (i < $scope.pageLimit) {
                                console.log("its less")

                            }
                            if (i < $scope.employees.length) {
                                console.log("yup,less")
                            }

                            if (i < $scope.pageLimit && i < $scope.employees.length) {//5
                                console.log("HELLO")
                                console.log($scope.employees[i])
                                console.log($scope.pageLimit, i, $scope.employees.length)
                                if ($scope.employees[i]) {
                                    $scope.pageArray.push($scope.employees[i])
                                    console.log(i)
                                    console.log("firstCondiation")
                                    console.log($scope.pageArray)

                                }



                            } else {
                                if (!$scope.usersLoaded) {

                                    console.log("else")
                                    console.log($scope.pageArray)
                                    $scope.loadingUsers = false;
                                    $scope.employeesPaginated.push($scope.pageArray)
                                    console.log($scope.employeesPaginated)
                                    $scope.pageArray = [];
                                    if ($scope.employees[i] !== undefined) {
                                        $scope.pageArray.push($scope.employees[i])
                                    }
                                    //console.log(pageLimit)
                                    $scope.pageLimit = $scope.pageLimit + 4;
                                    console.log($scope.pageLimit, i, $scope.employees.length)

                                    page++

                                }

                            }

                        }


                        $scope.usersLoaded = true;
                        $scope.loadingUsers = false;

                    })
                } else {
                    console.log("HERE")
                    $scope.loadingUsers = true;
                    $scope.employeeHome = false;
                    $timeout(function () {
                        $scope.loadingUsers = false;
                        $scope.usersLoaded = true;
                        
                    }, 1000)
                    $scope.employeeListOpen = true;
                    
                    $scope.delinquentTimeSheetPageOpened = false;
                    $scope.payslipGenerationOpen = false;
                    $scope.userFilePage = false;
                    $scope.userList = true;
                    $scope.pageLimit = 4


                }


            }
        }

        $scope.openEmployeeHome = function () {
            console.log("clicked")

            $scope.employeeHome = true;

            $scope.employeeListOpen = false;

        }
        $scope.openCloseIssue = function () {
            console.log($scope.openIssue)

            if (!$scope.openIssue) {
                $scope.openIssue = true
                $scope.closeIssue = false;
            } else {
                $scope.openIssue = false
                $scope.closeIssue = true;
            }
        }

        $scope.openManagementPage = function () {


            $scope.managementPage = true;
            $scope.personalHistoryTitle = false;
            $scope.payslipPageOpen = false;
            $scope.employeesPage = false;
            $scope.payslipPageSelected = false;;

            $scope.clientsPage = false;
            $scope.payslipPageOpen = false;


        }

        $scope.openClientsPage = function () {

            console.log("clicked")
            $scope.employeeHome = true;
            console.log($scope.clientsPage)
            if ($scope.clientsPage) {

                //$scope.clientsPage = false;

            } else {
                $scope.clientsPage = true;
                $scope.employeesPage = false;
                $scope.managementPage = false;
                $scope.payslipPageSelected = false;

                $scope.payslipPageOpen = false;

            }

        }
        $scope.openEmployeesPage = function () {
            console.log("clicked")
            console.log($scope.employeesPage)


            if ($scope.employeesPage) {

                //$scope.employeesPage = false;

            } else {
                $scope.employeesPage = true;
                $scope.employeeListOpen = false;
                $scope.employeeHome = true;
                $scope.historyPageOpen = false;
                $scope.generalHistoryOpen = false;
                $scope.personalHistoryOpen = false;
                $scope.curHistory = null;
                console.log($scope.employeesPage)
                $scope.currentUserFile = "";
                $scope.clientsPage = false;
                $scope.managementPage = false;
                $scope.payslipPageSelected = false;

                $scope.payslipPageOpen = false;
            }

        }
        $scope.openComplaints = function () {
            $scope.openJob = 0;
            if ($scope.bookedJobs) {
                $scope.bookedJobs = false;
            }
            if ($scope.complaintsOpened) {
                $scope.complaintsOpened = false;
            } else {
                $scope.complaintsOpened = true;

            }
        }
        $scope.openCloseBookedJobs = function () {
            if ($scope.complaintsOpened) {
                $scope.complaintsOpened = false;
            }
            if ($scope.bookedJobs) {
                $scope.bookedJobs = false;
            } else {
                $scope.bookedJobs = true;
            }
        }
        $scope.openUserFileHistory = function (name, phonenumber) {
            $scope.openJob = 0;
            $scope.generalHistoryOpen = false;
            $scope.generalHistoryTitle = false;
            $scope.loadingPersonalHistory = true;
            $scope.personalHistoryTitle = true;
            $scope.personalHistoryOpen = true;
            $scope.employeeHome = false;
            $scope.searchResults = false;
            $scope.userList = false;
            $scope.employeeListOpen = false;
            $scope.userDetailsPageOpened = true;
            $scope.bookedJobsPageOpened = false;
            $scope.complaintsPageOpened = false;
            $scope.commentsPageOpened = false;
            console.log(phonenumber)
            console.log(name)
            //$scope.currentUserFile = name;
            $scope.currentUserHistoryFile = name;
            $scope.currentUserPhoneNumber = phonenumber;
            $scope.jobDetails = [];
            //$scope.employeesPaginated = [];

            $scope.hoursArrayForHistory = [];
            if($scope.usersLoaded ){
                 for (var i = 0; i < $scope.employees.length; i++) {
                    if ($scope.employees[i].name == $scope.currentUserHistoryFile) {
                        console.log($scope.currentUserFile)
                        // $scope.jobDetails = data.data.users[i].jobDetails;
                        $scope.comments = $scope.employees[i].comments;
                        $scope.payperiods = $scope.employees[i].payperiods;
                        $scope.payPeriodHistory = $scope.employees[i].payperiodhistory
                       // $timeout(function(){
                        for (var b = 0; b < $scope.payPeriodHistory.length; b++) {
                            //$scope.data

                            // $scope.data[0][b]= hoursIterator;


                            for (var c = 0; c < $scope.payPeriodHistory[b].entry.length; c++) {
                                var hoursIterator = 0;
                                var minIterator = 0;
                                //console.log(c,$scope.payPeriodHistory[b].entry.length)
                                // console.log("hoursIteratot",hoursIterator)



                                $scope.labels[c] = $scope.payPeriodHistory[b].entry[c].date
/*
                                var startTime = moment($scope.payPeriodHistory[b].entry[c].timein, "HH:mm:ss a");
                                var endTime = moment($scope.payPeriodHistory[b].entry[c].timeout, "HH:mm:ss a");
                                var duration = moment.duration(endTime.diff(startTime));
                                var hours = parseInt(duration.asHours());
                                var minutes = parseInt(duration.asMinutes()) - hours * 60;
                                //hoursIterator = hoursIterator + hours;
                                //minIterator = minIterator + minutes
                                if (minutes == 15) {
                                    hours + .25
                                    minIterator = 0;
                                }
                                if (minutes == 30) {
                                    hours + .30
                                }
                                if (minutes == 45) {
                                    hours + .75
                                }*/
                                $scope.data[0][c] = $scope.payPeriodHistory[b].entry[c].hoursCalculated;

                               // console.log(hours, minutes)
                            }

                        }
                            $scope.loadingPersonalHistory = false;

                        //},2000)
                        //$scope.loadingPersonalHistory = false;
                        console.log($scope.payperiods)
                        console.log($scope.currentUserFile)
                        console.log($scope.payPeriodHistory)

                    }
                }

            }else{
                 User.getUsers().then(function (data) {
                console.log(data)

                // $scope.employees = data.data.users;
                //$scope.jobDetails = data.data.users.jobDetails;
                for (var i = 0; i < data.data.users.length; i++) {
                    if (data.data.users[i].name == $scope.currentUserHistoryFile) {
                        console.log($scope.currentUserFile)
                        // $scope.jobDetails = data.data.users[i].jobDetails;
                        $scope.comments = data.data.users[i].comments;
                        $scope.payperiods = data.data.users[i].payperiods;
                        $scope.payPeriodHistory = data.data.users[i].payperiodhistory
                        $scope.loadingPersonalHistory = false;
                        console.log($scope.payperiods)
                        console.log($scope.currentUserFile)
                        console.log($scope.payPeriodHistory)

                        for (var b = 0; b < $scope.payPeriodHistory.length; b++) {
                            //$scope.data

                            // $scope.data[0][b]= hoursIterator;

                            for (var c = 0; c < $scope.payPeriodHistory[b].entry.length; c++) {
                                var hoursIterator = 0;
                                var minIterator = 0;
                                //console.log(c,$scope.payPeriodHistory[b].entry.length)
                                // console.log("hoursIteratot",hoursIterator)



                                $scope.labels[c] = $scope.payPeriodHistory[b].entry[c].date

                                var startTime = moment($scope.payPeriodHistory[b].entry[c].timein, "HH:mm:ss a");
                                var endTime = moment($scope.payPeriodHistory[b].entry[c].timeout, "HH:mm:ss a");
                                var duration = moment.duration(endTime.diff(startTime));
                                var hours = parseInt(duration.asHours());
                                var minutes = parseInt(duration.asMinutes()) - hours * 60;
                                //hoursIterator = hoursIterator + hours;
                                //minIterator = minIterator + minutes
                                if (minutes == 15) {
                                    hours + .25
                                    minIterator = 0;
                                }
                                if (minutes == 30) {
                                    hours + .30
                                }
                                if (minutes == 45) {
                                    hours + .75
                                }
                                $scope.data[0][c] = hours + minutes

                                console.log(hours, minutes)
                            }

                        }
                        /*
                        var startTime = moment($scope.allEmployeesJobDetails[s][k].timein, "HH:mm:ss a");
                                    var endTime = moment($scope.allEmployeesJobDetails[s][k].timeout, "HH:mm:ss a");
                                    var duration = moment.duration(endTime.diff(startTime));
                                    var hours = parseInt(duration.asHours());
                                    var minutes = parseInt(duration.asMinutes()) - hours * 60;

                        $scope.payperiod = data.data.users[i].payperiodnum;
                        */

                        for (var k = 0; k < $scope.payperiods.length; k++) {
                            //console.log($scope.payperiods[k].payperiodnum)
                            //console.log($rootScope.payPeriod)
                            if ($scope.payperiods[k].payperiodnum == $rootScope.payPeriod) {
                                console.log($scope.payperiods[k].jobDetails)

                                $scope.jobDetails = $scope.payperiods[k].jobDetails
                            }
                           
                        }

                    }
                }
                console.log($scope.payperiods)
                console.log($scope.jobDetails)
            })

            }
           
            console.log(name);
            console.log("Curent User", $scope.currentUserFile)
            if (!$scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if (!$scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if ($scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if ($scope.userFilePage && $scope.currentUserFile !== name) {
                $scope.currentUserFile = name;
                $scope.userFilePage = true;
            }
        }
        $scope.openUserFile = function (name, phonenumber) {
            $('html, body').animate({ scrollTop: 0 }, 'fast');

            $scope.openJob = 0;
            
            
            $scope.employeeHome = false;
            $scope.loadingCurrentEmployee = true;
            $scope.searchResults = false;
            $scope.userList = false;
            $scope.employeeListOpen = false;
            $scope.userDetailsPageOpened = true;
            $scope.delinquentTimeSheetPageOpened = false;
            $scope.bookedJobsPageOpened = false;
            $scope.complaintsPageOpened = false;
            $scope.commentsPageOpened = false;
            console.log(phonenumber)
            console.log(name)
            $scope.currentUserFile = name;
            $scope.currentUserPhoneNumber = phonenumber;
            $scope.delinquentTimeSheetArray = [];
            $scope.jobDetails = [];

            if ($scope.usersLoaded) {
                console.log("users loaded")
                User.findUser($scope.currentUserFile).then(function(data){
                    console.log(data)
                    $scope.currentEmployee = data.data.user
                    $scope.loadingCurrentEmployee = false;
                   // console.log
                    $scope.comments = data.data.user[0].comments
                      if($scope.comments.length <1){
                            $scope.noComments = true;
                        }
                        if(data.data.user[0].complaints.length < 1){
                            $scope.noComplaints = true;
                        }
                        $scope.payperiods = data.data.user[0].payperiods;
                        $scope.payPeriodHistory = data.data.user[0].payperiodhistory
                        $scope.delinquenttimesheets= data.data.user[0].delinquenttimesheets
                        if($scope.delinquenttimesheets.length>0){
                             $scope.delinquentTimeSheet = true;
                               for (var t = 0; t <$scope.delinquenttimesheets[0].length; t++) {

                                $scope.delinquentTimeSheetArray.push($scope.delinquenttimesheets[0][t])

                            }
                        }else{
                            $scope.delinquentTimeSheet = false;
                        }
                  
                        console.log($scope.delinquentTimeSheetArray)
                        console.log($scope.payperiods)
                        console.log($scope.currentUserFile)
                        console.log($scope.payPeriodHistory)
                        $scope.payperiod = data.data.user[0].payperiodnum;



                /* NOT NEEDED WHEN ONLY ONE PAY PERIOD EXISTS... */
                
                       /* for (var k = 0; k < $scope.payperiods.length; k++) {
                            //console.log($scope.payperiods[k].payperiodnum)
                            //console.log($rootScope.payPeriod)
                            if ($scope.payperiods[k].payperiodnum == $rootScope.payPeriod) {
                                console.log($scope.payperiods[k].jobDetails)

                                $scope.jobDetails = $scope.payperiods[k].jobDetails
                            }

                        }
                        */
                        $scope.jobDetails = $scope.payperiods[0].jobDetails
                        

               /*NOT NEEDED WHEN ONLY ONE PAY PERIOD EXISTS...*/         

                })
             /*   for (var i = 0; i < $scope.employees.length; i++) {
                    if ($scope.employees[i].name == $scope.currentUserFile) {
                        console.log($scope.currentUserFile)
                        // $scope.jobDetails = data.data.users[i].jobDetails;
                        $scope.comments = $scope.employees[i].comments;
                        if($scope.comments.length <1){
                            $scope.noComments = true;
                        }
                        if($scope.employees[i].complaints.length < 1){
                            $scope.noComplaints = true;
                        }
                        $scope.payperiods = $scope.employees[i].payperiods;
                        $scope.payPeriodHistory = $scope.employees[i].payperiodhistory
                        $scope.delinquenttimesheets = $scope.employees[i].delinquenttimesheets
                        // console.log(data.data.users[i].delinquent)
                        if ($scope.delinquenttimesheets.length > 0) {
                            $scope.delinquentTimeSheet = true;
                            for (var t = 0; t <$scope.delinquenttimesheets[0].length; t++) {

                                $scope.delinquentTimeSheetArray.push($scope.delinquenttimesheets[0][t])

                            }
                        } else {
                            $scope.delinquentTimeSheet = false;
                        }
                        console.log($scope.delinquentTimeSheetArray)
                        console.log($scope.payperiods)
                        console.log($scope.currentUserFile)
                        console.log($scope.payPeriodHistory)
                        $scope.payperiod = $scope.employees[i].payperiodnum;


                        for (var k = 0; k < $scope.payperiods.length; k++) {
                            //console.log($scope.payperiods[k].payperiodnum)
                            //console.log($rootScope.payPeriod)
                            if ($scope.payperiods[k].payperiodnum == $rootScope.payPeriod) {
                                console.log($scope.payperiods[k].jobDetails)

                                $scope.jobDetails = $scope.payperiods[k].jobDetails
                            }

                        }

                    }
                }*/
            } else {

                User.getUsers().then(function (data) {
                    console.log(data)
                    // $scope.employees = data.data.users;
                    //$scope.jobDetails = data.data.users.jobDetails;
                    for (var i = 0; i < data.data.users.length; i++) {
                        if (data.data.users[i].name == $scope.currentUserFile) {
                            console.log($scope.currentUserFile)
                            // $scope.jobDetails = data.data.users[i].jobDetails;
                            $scope.comments = data.data.users[i].comments;
                            $scope.payperiods = data.data.users[i].payperiods;
                            $scope.payPeriodHistory = data.data.users[i].payperiodhistory
                            // console.log(data.data.users[i].delinquent)
                            if (data.data.users[i].delinquenttimesheets.length > 0) {
                                $scope.delinquentTimeSheet = true;
                                for (var t = 0; t < data.data.users[i].delinquenttimesheets[0].length; t++) {

                                    $scope.delinquentTimeSheetArray.push(data.data.users[i].delinquenttimesheets[0][t])

                                }
                            } else {
                                $scope.delinquentTimeSheet = false;
                            }
                            console.log($scope.delinquentTimeSheetArray)
                            console.log($scope.payperiods)
                            console.log($scope.currentUserFile)
                            console.log($scope.payPeriodHistory)
                            $scope.payperiod = data.data.users[i].payperiodnum;


                            for (var k = 0; k < $scope.payperiods.length; k++) {
                                //console.log($scope.payperiods[k].payperiodnum)
                                //console.log($rootScope.payPeriod)
                                if ($scope.payperiods[k].payperiodnum == $rootScope.payPeriod) {
                                    console.log($scope.payperiods[k].jobDetails)

                                    $scope.jobDetails = $scope.payperiods[k].jobDetails
                                }

                            }

                        }
                    }
                    console.log($scope.payperiods)
                    console.log($scope.jobDetails)
                })
            }


            console.log(name);
            console.log("Curent User", $scope.currentUserFile)
            if (!$scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if (!$scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if ($scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if ($scope.userFilePage && $scope.currentUserFile !== name) {
                $scope.currentUserFile = name;
                $scope.userFilePage = true;
            }
        }

    })

}());