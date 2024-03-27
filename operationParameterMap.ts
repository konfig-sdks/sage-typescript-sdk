type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/documents-POST': {
        parameters: [
            {
                name: 'file'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'description'
            },
            {
                name: 'category_id'
            },
            {
                name: 'notify'
            },
        ]
    },
    '/documents/categories-GET': {
        parameters: [
        ]
    },
    '/employees-POST': {
        parameters: [
            {
                name: 'email'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'work_start_date'
            },
            {
                name: 'send_email'
            },
        ]
    },
    '/employees/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'team_history'
            },
            {
                name: 'employment_status_history'
            },
            {
                name: 'position_history'
            },
        ]
    },
    '/employees/{id}/compensations-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/employees/{id}/custom-fields-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/terminated-employees/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/employees/{id}/leave-management/balances-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/employees-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'team_history'
            },
            {
                name: 'employment_status_history'
            },
            {
                name: 'position_history'
            },
        ]
    },
    '/terminated-employees-GET': {
        parameters: [
            {
                name: 'page'
            },
        ]
    },
    '/employees/{id}/terminations-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'date'
            },
            {
                name: 'termination_reason_id'
            },
            {
                name: 'comments'
            },
        ]
    },
    '/employees/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'work_start_date'
            },
            {
                name: 'location_id'
            },
            {
                name: 'team_id'
            },
            {
                name: 'leader_id'
            },
            {
                name: 'position_id'
            },
            {
                name: 'employee_number'
            },
            {
                name: 'approver_ids'
            },
            {
                name: 'selected_leave_types'
            },
        ]
    },
    '/employees/{id}/custom-fields/{custom_field_id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'custom_field_id'
            },
            {
                name: 'value'
            },
        ]
    },
    '/vikarina/newstarter-employees-POST': {
        parameters: [
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
        ]
    },
    '/vikarina/bonuses-POST': {
        parameters: [
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
        ]
    },
    '/vikarina/appointments-POST': {
        parameters: [
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
        ]
    },
    '/vikarina/bank-accounts-POST': {
        parameters: [
        ]
    },
    '/vikarina/contract-information-POST': {
        parameters: [
        ]
    },
    '/vikarina/job-positions-POST': {
        parameters: [
        ]
    },
    '/vikarina/leave-types-POST': {
        parameters: [
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
        ]
    },
    '/vikarina/organization-structure-POST': {
        parameters: [
        ]
    },
    '/vikarina/salaries-POST': {
        parameters: [
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
        ]
    },
    '/vikarina/terminated-employees-POST': {
        parameters: [
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
        ]
    },
    '/vikarina/timesheets-POST': {
        parameters: [
            {
                name: 'start_date'
            },
            {
                name: 'end_date'
            },
        ]
    },
    '/vikarina/unused-days-POST': {
        parameters: [
        ]
    },
    '/leave-management/kit-days-POST': {
        parameters: [
            {
                name: 'policy_id'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'date'
            },
            {
                name: 'date_from'
            },
            {
                name: 'date_to'
            },
        ]
    },
    '/leave-management/kit-days-GET': {
        parameters: [
            {
                name: 'policy_id'
            },
            {
                name: 'employee_id'
            },
        ]
    },
    '/leave-management/kit-days/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'status'
            },
        ]
    },
    '/leave-management/policies/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'kit_days_enabled'
            },
            {
                name: 'kit_days_quantity'
            },
        ]
    },
    '/leave-management/kit-days-POST': {
        parameters: [
            {
                name: 'policy_id'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'date'
            },
            {
                name: 'date_from'
            },
            {
                name: 'date_to'
            },
        ]
    },
    '/leave-management/reports/individual-allowances-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
            {
                name: 'location_ids'
            },
            {
                name: 'employee_ids'
            },
            {
                name: 'team_ids'
            },
        ]
    },
    '/leave-management/kit-days-GET': {
        parameters: [
            {
                name: 'policy_id'
            },
            {
                name: 'employee_id'
            },
        ]
    },
    '/employees/{id}/leave-management/balances-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/leave-management/policies/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/leave-management/out-of-office-today-GET': {
        parameters: [
            {
                name: 'date'
            },
        ]
    },
    '/leave-management/policies-GET': {
        parameters: [
        ]
    },
    '/leave-management/requests-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'from'
            },
            {
                name: 'to'
            },
        ]
    },
    '/leave-management/requests-POST': {
        parameters: [
            {
                name: 'type'
            },
            {
                name: 'time_off_policy_id'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'part_of_day'
            },
            {
                name: 'date'
            },
            {
                name: 'date_from'
            },
            {
                name: 'date_to'
            },
            {
                name: 'hours'
            },
            {
                name: 'time_from'
            },
            {
                name: 'time_to'
            },
            {
                name: 'details'
            },
        ]
    },
    '/leave-management/kit-days/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'status'
            },
        ]
    },
    '/leave-management/policies/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'kit_days_enabled'
            },
            {
                name: 'kit_days_quantity'
            },
        ]
    },
    '/offboarding/tasks-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'boarding_task_template_category_id'
            },
            {
                name: 'due_in'
            },
            {
                name: 'description'
            },
            {
                name: 'default_assignee_type'
            },
            {
                name: 'assignee_id'
            },
            {
                name: 'require_attachment'
            },
        ]
    },
    '/offboarding/categories-GET': {
        parameters: [
        ]
    },
    '/onboarding/tasks-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'boarding_task_template_category_id'
            },
            {
                name: 'due_in'
            },
            {
                name: 'description'
            },
            {
                name: 'default_assignee_type'
            },
            {
                name: 'assignee_id'
            },
            {
                name: 'require_attachment'
            },
            {
                name: 'add_after'
            },
        ]
    },
    '/onboarding/categories-GET': {
        parameters: [
        ]
    },
    '/performance/goals/quarterly-progress/company-goals-GET': {
        parameters: [
        ]
    },
    '/performance/goals/quarterly-progress/individual-goals-GET': {
        parameters: [
        ]
    },
    '/performance/goals/quarterly-progress/team-goals-GET': {
        parameters: [
        ]
    },
    '/performance/goals/quarterly-progress/overall-GET': {
        parameters: [
        ]
    },
    '/leave-management/kit-days-POST': {
        parameters: [
            {
                name: 'policy_id'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'date'
            },
            {
                name: 'date_from'
            },
            {
                name: 'date_to'
            },
        ]
    },
    '/leave-management/kit-days-GET': {
        parameters: [
            {
                name: 'policy_id'
            },
            {
                name: 'employee_id'
            },
        ]
    },
    '/leave-management/kit-days/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'status'
            },
        ]
    },
    '/positions-GET': {
        parameters: [
            {
                name: 'page'
            },
        ]
    },
    '/recruitment/positions/{id}/applicants-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'applicant[first_name]'
            },
            {
                name: 'send_thank_you_email'
            },
            {
                name: 'applicant[last_name]'
            },
            {
                name: 'applicant[email]'
            },
            {
                name: 'applicant[referral]'
            },
            {
                name: 'applicant[phone_number]'
            },
            {
                name: 'applicant[source]'
            },
            {
                name: 'applicant[address]'
            },
            {
                name: 'applicant[summary]'
            },
            {
                name: 'applicant[attachment]'
            },
        ]
    },
    '/recruitment/applicants/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/recruitment/positions/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/recruitment/applicants/{id}/actions-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/recruitment/positions/{id}/applicants-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'stage_id'
            },
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/recruitment/positions-GET': {
        parameters: [
            {
                name: 'status'
            },
            {
                name: 'hiring_manager_ids'
            },
            {
                name: 'group_ids'
            },
            {
                name: 'location_ids'
            },
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/teams-GET': {
        parameters: [
            {
                name: 'page'
            },
        ]
    },
    '/termination-reasons-GET': {
        parameters: [
            {
                name: 'page'
            },
        ]
    },
    '/timesheets/clock-in-POST': {
        parameters: [
            {
                name: 'override'
            },
            {
                name: 'clocked_time'
            },
        ]
    },
}